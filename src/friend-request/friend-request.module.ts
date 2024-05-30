import { Module } from '@nestjs/common';
import { FriendRequestService } from './friend-request.service';
import { FriendRequestController } from './friend-request.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [FriendRequestController],
  providers: [FriendRequestService, PrismaService],
})
export class FriendRequestModule {}
