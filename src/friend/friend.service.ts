import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FriendService {
  constructor(private prisma: PrismaService) {}

  async findAll(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        friends: {
          include: { friend: true },
        },
        friendsOf: {
          include: { user: true },
        },
      },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const friends = [
      ...user.friends.map(f => f.friend),
      ...user.friendsOf.map(f => f.user),
    ];

    return friends;
  }
}
