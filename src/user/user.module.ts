import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserUploadModule } from 'src/modules/upload/user-upload/user-upload.module';
import { UserUploadService } from 'src/modules/upload/user-upload/user-upload.service';




@Module({
  imports: [UserUploadModule],
  controllers: [UserController],
  providers: [UserService, PrismaService, UserUploadService],
})
export class UserModule {}
