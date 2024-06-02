import { Injectable, BadRequestException } from '@nestjs/common';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import * as sharp from 'sharp';
import * as path from 'path';
import * as fs from 'fs';
import { MulterFile } from 'multer';

@Injectable()
export class PostUploadService {
  async savePostFile(file: MulterFile): Promise<string> {
    try {
      const directoryPath = path.join(__dirname, '../../../../public/uploads/posts');

      // Verificar se o diretório existe, senão criar
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
      }

      if (!file || !file.originalname) {
        throw new BadRequestException('Nenhum arquivo enviado');
      }

      const uniqueFileName = uuidv4() + extname(file.originalname);
      const filePath = path.join(directoryPath, uniqueFileName);

      await sharp(file.buffer)
        .resize(1024, 1024)
        .jpeg({ quality: 80 })
        .toFile(filePath);
      const url = `${process.env.BASE_API}/uploads/posts/${uniqueFileName}`;

      return url;
    } catch (error) {
      console.error('Erro ao salvar o arquivo:', error);
      throw new Error('Erro ao salvar o arquivo');
    }
  }
}
