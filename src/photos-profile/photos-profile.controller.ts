import { Controller, Post, UseGuards, UploadedFile, UseInterceptors, Body, BadRequestException, Get } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { GetUserId } from '../auth/get-user.decorator';
import { PhotoUploadService } from '../modules/upload/photo-upload/photo-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterFile } from 'multer';
import { PrismaService } from '../prisma/prisma.service';
import { PhotosProfileService } from './photos-profile.service';

@Controller('photos')
@UseGuards(AuthGuard)
export class PhotosProfileController {
  constructor(
    private readonly photoUploadService: PhotoUploadService,
    private readonly prisma: PrismaService,
    private readonly photosProfileService: PhotosProfileService,
  ) {}

  @Post('profile')
  @UseInterceptors(FileInterceptor('file'))
  async uploadProfilePhoto(
    @UploadedFile() file: MulterFile,
    @GetUserId() userId: string,
    @Body('descript') descript: string,
  ): Promise<{ url: string }> {
    if (!file) {
      throw new BadRequestException('Nenhuma foto enviada');
    }

    const filePath = await this.photoUploadService.saveProfilePhoto(file);

    const photo = await this.prisma.photo.create({
      data: {
        url: filePath,
        descript: descript,
        userId: userId,
      },
    });

    return { url: photo.url };
  }

  @Get('profile')
  async getUserPhotos(@GetUserId() userId: string) {
    return this.photosProfileService.getUserPhotos(userId);
  }
}
