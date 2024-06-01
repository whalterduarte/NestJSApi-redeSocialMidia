import { Controller, Post, UseGuards, Body, Get, Param, Delete, BadRequestException } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { GetUserId } from '../auth/get-user.decorator';
import { PhotoCommentService } from './photo-comment.service';
import { CreatePhotoCommentDto } from './dto/create-photo-comment.dto';

@Controller('comments')
@UseGuards(AuthGuard)
export class PhotoCommentController {
  constructor(private readonly photoCommentService: PhotoCommentService) {}

  @Post()
  async createComment(
    @Body() createPhotoCommentDto: CreatePhotoCommentDto,
    @GetUserId() userId: string,
  ) {
    const { photoId, content } = createPhotoCommentDto;
    return this.photoCommentService.createComment(photoId, userId, content);
  }

  @Get(':photoId')
  async getCommentsForPhoto(@Param('photoId') photoId: string) {
    return this.photoCommentService.getCommentsForPhoto(photoId);
  }

  @Delete(':commentId')
  async deleteComment(
    @GetUserId() userId: string,
    @Param('commentId') commentId: string,
  ) {
    const deleted = await this.photoCommentService.deleteComment(commentId, userId);
    if (!deleted) {
      throw new BadRequestException('O comentário não pode ser deletado');
    }
    return { message: 'Comentário deletado com sucesso' };
  }
}
