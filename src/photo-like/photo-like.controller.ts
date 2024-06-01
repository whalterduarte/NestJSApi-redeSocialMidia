import { Controller, Post, Delete, UseGuards, Body, Param, BadRequestException, ParseIntPipe } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { GetUserId } from '../auth/get-user.decorator';
import { CreatePhotoLikeDto } from './dto/create-photo-like.dto';
import { PhotoLikeService } from './photo-like.service';

@Controller('likes')
@UseGuards(AuthGuard)
export class PhotoLikeController {
  constructor(private readonly photoLikeService: PhotoLikeService) {}

  @Post()
  async likePhoto(
    @GetUserId() userId: string,
    @Body() createPhotoLikeDto: CreatePhotoLikeDto,
  ): Promise<{ message: string }> {
    return this.photoLikeService.likePhoto(userId, createPhotoLikeDto);
  }

  @Delete(':photoId')
  async unlikePhoto(
    @GetUserId() userId: string,
    @Param('photoId', ParseIntPipe) photoId: number,
  ): Promise<{ message: string }> {
    return this.photoLikeService.unlikePhoto(userId, photoId);
  }
}
