import { Controller, Post, Get, UseGuards, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { GetUserId } from '../auth/get-user.decorator';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { MulterFile } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('posts')
@UseGuards(AuthGuard)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createPost(
    @GetUserId() userId: string,
    @Body() createPostDto: CreatePostDto,
    @UploadedFile() file: MulterFile,
  ) {
    return this.postService.createPost(userId, createPostDto, file);
  }

  @Get()
  async getAllPosts() {
    return this.postService.getAllPosts();
  }

  @Get('user/:userId')
  async getPostsByUserId(@GetUserId() userId: string) {
    return this.postService.getPostsByUserId(userId);
  }
}
