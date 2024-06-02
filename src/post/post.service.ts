import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { MulterFile } from 'multer';
import { PostUploadService } from 'src/modules/upload/post-upload/post-upload.service';

@Injectable()
export class PostService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly postUploadService: PostUploadService,
  ) {}

  async createPost(userId: string, createPostDto: CreatePostDto, file: MulterFile) {
    const { content, visibility } = createPostDto;

    const fileUrl = await this.postUploadService.savePostFile(file);

    return this.prisma.post.create({
      data: {
        content,
        file: fileUrl,
        visibility,
        authorId: userId,
      },
    });
  }

  async getAllPosts() {
    return this.prisma.post.findMany({
      orderBy: {
        createdAt: 'desc', 
      },
    });
  }

  async getPostsByUserId(userId: string) {
    return this.prisma.post.findMany({
      where: {
        authorId: userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
