import { Injectable } from '@nestjs/common';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import * as sharp from 'sharp';
import * as path from 'path';
require('dotenv').config()

@Injectable()
export class UserUploadService {
  async saveUserFile(file): Promise<string> {
    if (!file || !file.originalname) {
      return `${process.env.BASEAPI}/uploads/user/userpadrao.png`;
    }

    const uniqueFileName = uuidv4() + extname(file.originalname);
    const filePath = path.join(__dirname, '../../../../public/uploads/user', uniqueFileName);

    await sharp(file.buffer)
      .resize(1024, 1024) 
      .jpeg({ quality: 80 })
      .toFile(filePath); 

    return `${process.env.BASE_API}/uploads/user/${uniqueFileName}`;
  }
}
