import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostUploadService } from 'src/modules/upload/post-upload/post-upload.service';

@Module({
  controllers: [PostController,],
  providers: [PostService,PrismaService,PostUploadService],
})
export class PostModule {}
