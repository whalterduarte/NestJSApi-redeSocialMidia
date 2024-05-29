// user-upload.module.ts
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UserUploadController } from './user-upload.controller';
import { UserUploadService } from './user-upload.service';

@Module({
  imports: [
    MulterModule.register({
      dest: './public/uploads/user',
    })
  ],
  controllers: [UserUploadController],
  providers: [UserUploadService],
})
export class UserUploadModule {}
