import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { AcceptFriendRequestDto, CreateFriendRequestDto } from './dto/create-friend-request.dto';
import { UpdateFriendRequestDto } from './dto/update-friend-request.dto';
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

  async acceptRequest(acceptFriendRequestDto: AcceptFriendRequestDto) {
    const { requestId } = acceptFriendRequestDto;
    
    if (!Number.isInteger(requestId) || requestId <= 0) {
        throw new ConflictException('ID de solicitação de amigo inválido');
    }

    try {
        const friendRequest = await this.prisma.friendRequest.findUnique({
            where: { id: requestId },
        });

        if (!friendRequest) {
            throw new NotFoundException(`Solicitação de amizade com ID ${requestId} não encontrada`);
        }

        if (friendRequest.status !== 'pending') {
            throw new ConflictException('Não é possível aceitar uma solicitação de amizade que não está pendente');
        }

        await this.prisma.friendRequest.update({
            where: { id: requestId },
            data: { status: 'accepted' },
        });

        return {
          statusCode: 201,
          message: `Solicitação de amizade com ID ${requestId} aceita com sucesso`,
      };
    } catch (error) {
        throw new ConflictException('Ocorreu um erro ao aceitar a solicitação de amizade');
    }
}
}