import { Module } from '@nestjs/common';
import { PhotoLikeService } from './photo-like.service';
import { PhotoLikeController } from './photo-like.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PhotoLikeController],
  providers: [PhotoLikeService, PrismaService],
})
export class PhotoLikeModule {}
