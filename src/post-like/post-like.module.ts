import { Module } from '@nestjs/common';
import { PostLikeService } from './post-like.service';
import { PostLikeController } from './post-like.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PostLikeController],
  providers: [PostLikeService,PrismaService],
})
export class PostLikeModule {}
