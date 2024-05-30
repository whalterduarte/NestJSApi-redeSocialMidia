import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFriendRequestDto } from './dto/create-friend-request.dto';
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
