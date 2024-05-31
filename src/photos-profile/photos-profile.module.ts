import { Module } from '@nestjs/common';
import { PhotosProfileService } from './photos-profile.service';
import { PhotosProfileController } from './photos-profile.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PhotoUploadService } from 'src/modules/upload/photo-upload/photo-upload.service';

@Module({
  controllers: [PhotosProfileController],
  providers: [PhotosProfileService,PrismaService,PhotoUploadService],
})
export class PhotosProfileModule {}
