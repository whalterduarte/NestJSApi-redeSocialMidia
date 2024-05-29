import { Module } from '@nestjs/common';
import { PhotoLikeService } from './photo-like.service';
import { PhotoLikeController } from './photo-like.controller';

@Module({
  controllers: [PhotoLikeController],
  providers: [PhotoLikeService],
})
export class PhotoLikeModule {}
