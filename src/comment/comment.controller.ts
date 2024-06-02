import { Controller, Post, UseGuards, Body, Get, Param, Delete, BadRequestException } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { GetUserId } from '../auth/get-user.decorator';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
@UseGuards(AuthGuard)
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async createComment(
    @Body() createCommentDto: CreateCommentDto,
    @GetUserId() userId: string,
  ) {
    const { postId, content } = createCommentDto;
    return this.commentService.createComment(postId, userId, content);
  }

  @Get(':postId')
  async getCommentsForPost(@Param('postId') postId: string) {
    return this.commentService.getCommentsForPost(postId);
  }

  @Delete(':commentId')
  async deleteComment(
    @GetUserId() userId: string,
    @Param('commentId') commentId: string,
  ) {
    const deleted = await this.commentService.deleteComment(commentId, userId);
    if (!deleted) {
      throw new BadRequestException('O comentário não pode ser deletado');
    }
    return { message: 'Comentário deletado com sucesso' };
  }
}
