import { Module } from '@nestjs/common';
import { PhotoCommentService } from './photo-comment.service';
import { PhotoCommentController } from './photo-comment.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PhotoCommentController],
  providers: [PhotoCommentService, PrismaService],
})
export class PhotoCommentModule {}
