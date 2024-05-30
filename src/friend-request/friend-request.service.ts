import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFriendRequestDto } from './dto/create-friend-request.dto';
import { UpdateFriendRequestDto } from './dto/update-friend-request.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FriendRequestService {

  constructor(private readonly prisma: PrismaService) {}
  
  async create(createFriendRequestDto: CreateFriendRequestDto) {
    const { requesterId, requesteeId } = createFriendRequestDto;

    // Verificar se a solicitação já existe
    const existingRequest = await this.prisma.friendRequest.findFirst({
      where: {
        OR: [
          { requesterId, requesteeId },
          { requesterId: requesteeId, requesteeId: requesterId }, // Verificar a inversa também
        ],
      },
    });

    if (existingRequest) {
      throw new ConflictException('Solicitação de amizade já enviada');
    }

    // Verificar se o usuário que envia a solicitação existe
    const requesterExists = await this.prisma.user.findUnique({
      where: { id: requesterId },
    });
    if (!requesterExists) {
      throw new NotFoundException(`Usuário com ID ${requesterId} não encontrado`);
    }

    // Verificar se o usuário que recebe a solicitação existe
    const requesteeExists = await this.prisma.user.findUnique({
      where: { id: requesteeId },
    });
    if (!requesteeExists) {
      throw new NotFoundException(`Usuário com ID ${requesteeId} não encontrado`);
    }

    // Criar a nova solicitação de amizade
    return this.prisma.friendRequest.create({
      data: {
        requesterId,
        requesteeId,
        status: 'pending',
      },
    });
  }



  findAll() {
    return `This action returns all friendRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} friendRequest`;
  }

  update(id: number, updateFriendRequestDto: UpdateFriendRequestDto) {
    return `This action updates a #${id} friendRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} friendRequest`;
  }
}
