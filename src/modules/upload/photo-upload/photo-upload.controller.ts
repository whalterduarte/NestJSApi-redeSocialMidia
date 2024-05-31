import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PhotoUploadService } from './photo-upload.service';

@Controller('upload/photos-profile')
export class PhotoUploadController {
  constructor(private readonly uploadService: PhotoUploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadProfilePhoto(@UploadedFile() file) {
    const filePath = await this.uploadService.saveProfilePhoto(file); 
    return { filePath };
  }
}
