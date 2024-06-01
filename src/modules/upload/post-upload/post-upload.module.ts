import { Module } from '@nestjs/common';
import { PostUploadService } from './post-upload.service';
import { PostUploadController } from './post-upload.controller';


@Module({
  providers: [PostUploadService],
  controllers: [PostUploadController]
})
export class PostUploadModule {}
