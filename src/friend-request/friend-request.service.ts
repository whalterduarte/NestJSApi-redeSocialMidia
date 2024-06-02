import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFriendRequestDto } from './dto/create-friend-request.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class FriendRequestService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}
  
  async create(createFriendRequestDto: CreateFriendRequestDto, userId: string): Promise<any> {
    const { requesteeId } = createFriendRequestDto;
    const existingRequest = await this.prisma.friendRequest.findFirst({
      where: {
        requesterId: userId,
        requesteeId,
        status: 'pending',
      },
    });

    if (existingRequest) {
      throw new ConflictException('Solicitação de amizade já enviada');
    }

    const requesteeExists = await this.prisma.user.findUnique({
      where: { id: requesteeId },
    });
    if (!requesteeExists) {
      throw new NotFoundException(`Usuário com ID ${requesteeId} não encontrado`);
    }

    return this.prisma.friendRequest.create({
      data: {
        requesterId: userId,
        requesteeId,
        status: 'pending',
      },
    });
  }

  async getReceivedRequests(userId: string) {
    return this.prisma.friendRequest.findMany({
      where: {
        requesteeId: userId,
      },
    });
  }

  async acceptFriendRequest(requestId: number, userId: string): Promise<any> {
    const friendRequest = await this.prisma.friendRequest.findUnique({
      where: { id: requestId },
    });

    if (!friendRequest) {
      throw new NotFoundException('Solicitação de amizade não encontrada');
    }

    if (friendRequest.requesteeId !== userId) {
      throw new ConflictException('Você não tem permissão para aceitar esta solicitação de amizade');
    }

    const existingFriendship = await this.prisma.friend.findFirst({
      where: {
        OR: [
          { userId: friendRequest.requesterId, friendId: friendRequest.requesteeId },
          { userId: friendRequest.requesteeId, friendId: friendRequest.requesterId },
        ],
      },
    });

    if (existingFriendship) {
      throw new ConflictException('Vocês já são amigos');
    }

    await this.prisma.friendRequest.update({
      where: { id: requestId },
      data: { status: 'accepted' },
    });

    await this.prisma.friend.create({
      data: {
        userId: friendRequest.requesterId,
        friendId: friendRequest.requesteeId,
      },
    });

    await this.prisma.friend.create({
      data: {
        userId: friendRequest.requesteeId,
        friendId: friendRequest.requesterId,
      },
    });

    return { message: 'Solicitação de amizade aceita com sucesso' };
  }
}
