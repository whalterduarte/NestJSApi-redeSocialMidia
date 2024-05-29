import { Module } from '@nestjs/common';
import { PhotoCommentService } from './photo-comment.service';
import { PhotoCommentController } from './photo-comment.controller';

@Module({
  controllers: [PhotoCommentController],
  providers: [PhotoCommentService],
})
export class PhotoCommentModule {}
