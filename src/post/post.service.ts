import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
 // Importe o serviço PostUploadService
import { MulterFile } from 'multer'; // Importe o tipo MulterFile
import { PostUploadService } from 'src/modules/upload/post-upload/post-upload.service';

@Injectable()
export class PostService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly postUploadService: PostUploadService, // Injeção de dependência do PostUploadService
  ) {}

  async createPost(userId: string, createPostDto: CreatePostDto, file: MulterFile) {
    const { content, visibility } = createPostDto;

    // Salvar o arquivo do post usando o serviço PostUploadService
    const fileUrl = await this.postUploadService.savePostFile(file);

    // Criar o post com o URL do arquivo
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
