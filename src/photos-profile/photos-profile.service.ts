import { Injectable } from '@nestjs/common';
import { MulterFile } from 'multer';
import { PhotoUploadService } from 'src/modules/upload/photo-upload/photo-upload.service';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class PhotosProfileService {
  constructor(
    private readonly photoUploadService: PhotoUploadService,
    private readonly prisma: PrismaService,
  ) {}
  
  async getUserPhotos(userId: string) {
    return this.prisma.photo.findMany({
      where: {
        userId: userId,
      },
    });
  }

  async saveProfilePhoto(file: MulterFile): Promise<string> {
    return this.photoUploadService.saveProfilePhoto(file);
  }
}
