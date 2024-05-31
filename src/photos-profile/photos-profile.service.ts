import { BadRequestException, Injectable } from '@nestjs/common';
import { MulterFile } from 'multer';
import { PhotoUploadService } from 'src/modules/upload/photo-upload/photo-upload.service';


@Injectable()
export class PhotosProfileService {
  constructor(private readonly photoUploadService: PhotoUploadService) {}

  async saveProfilePhoto(file: MulterFile): Promise<string> {
    return this.photoUploadService.saveProfilePhoto(file);
  }
}
