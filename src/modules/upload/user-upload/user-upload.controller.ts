import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserUploadService } from './user-upload.service';

@Controller('upload')
export class UserUploadController {
  constructor(private readonly uploadService: UserUploadService) {}

  @Post('user')
  @UseInterceptors(FileInterceptor('file'))
  async uploadUserFile(@UploadedFile() file) {
    const filePath = await this.uploadService.saveUserFile(file);
    return { filePath };
  }
}