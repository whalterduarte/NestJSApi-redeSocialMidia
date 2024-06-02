import { Controller, Post, Delete, UseGuards, Body, Param, ParseIntPipe } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { GetUserId } from '../auth/get-user.decorator';
import { CreatePostLikeDto } from './dto/create-post-like.dto';
import { PostLikeService } from './post-like.service';

@Controller('posts')
@UseGuards(AuthGuard)
export class PostLikeController {
  constructor(private readonly postLikeService: PostLikeService) {}

  @Post('likes')
  async likePost(
    @GetUserId() userId: string,
    @Body() createPostLikeDto: CreatePostLikeDto,
  ): Promise<{ message: string }> {
    return this.postLikeService.likePost(userId, createPostLikeDto);
  }

  @Delete('likes/:postId')
  async unlikePost(
    @GetUserId() userId: string,
    @Param('postId', ParseIntPipe) postId: number,
  ): Promise<{ message: string }> {
    return this.postLikeService.unlikePost(userId, postId);
  }
}
