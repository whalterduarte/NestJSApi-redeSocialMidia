import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PostUploadService } from './post-upload.service';


@Controller('upload/posts')
export class PostUploadController {
  constructor(private readonly uploadService: PostUploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadPostFile(@UploadedFile() file) {
    try {
      const filePath = await this.uploadService.savePostFile(file);
      return { filePath };
    } catch (error) {
      console.error('Erro ao fazer upload do arquivo:', error);
      throw new Error('Erro ao fazer upload do arquivo');
    }
  }
}
