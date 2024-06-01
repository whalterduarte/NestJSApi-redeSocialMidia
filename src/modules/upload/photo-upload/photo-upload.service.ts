import { Injectable, BadRequestException } from '@nestjs/common';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import * as sharp from 'sharp';
import * as path from 'path';
import { MulterFile } from 'multer';

@Injectable()
export class PhotoUploadService {
  async saveProfilePhoto(file: MulterFile): Promise<string> {
    try {
      if (!file || !file.originalname) {
        throw new BadRequestException('Nenhuma foto de perfil enviada');
      }
  
      const uniqueFileName = uuidv4() + extname(file.originalname);
      const filePath = path.join(__dirname, '../../../../public/uploads/photos-profile', uniqueFileName);
  
      await sharp(file.buffer)
        .resize(1024, 1024) 
        .jpeg({ quality: 80 })
        .toFile(filePath); 
  
      // Construir a URL completa usando a URL base e o nome do arquivo
      const url = `${process.env.BASE_API}/uploads/photos-profile/${uniqueFileName}`;
  
      return url;
    } catch (error) {
      console.error('Erro ao salvar o arquivo:', error);
      throw new Error('Erro ao salvar o arquivo');
    }
  }
}
