import { Injectable } from '@nestjs/common';
import { MulterFile } from 'multer';
import * as path from 'path';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PostUploadService {
  async savePostFile(file: MulterFile): Promise<string> {
    try {
      if (!file || !file.originalname) {
        throw new Error('Nenhum arquivo enviado');
      }

      const uniqueFileName = uuidv4() + path.extname(file.originalname);
      const filePath = path.join(__dirname, '../../../../public/uploads/posts', uniqueFileName);
      
      await fs.promises.writeFile(filePath, file.buffer);
      
      // Construir a URL completa usando a URL base e o nome do arquivo
      const url = `${process.env.BASE_API}/uploads/posts/${uniqueFileName}`;

      return url;
    } catch (error) {
      console.error('Erro ao salvar o arquivo:', error);
      throw new Error('Erro ao salvar o arquivo');
    }
  }
}
