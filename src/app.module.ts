import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PhotoModule } from './photo/photo.module';
import { FriendRequestModule } from './friend-request/friend-request.module';
import { FriendModule } from './friend/friend.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { PostLikeModule } from './post-like/post-like.module';
import { NotificationModule } from './notification/notification.module';
import { PhotoCommentModule } from './photo-comment/photo-comment.module';
import { PhotoLikeModule } from './photo-like/photo-like.module';
import { UserUploadModule } from './modules/upload/user-upload/user-upload.module';
import { PostUploadModule } from './modules/upload/post-upload/post-upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    UserModule,
    PhotoModule,
    FriendRequestModule,
    FriendModule,
    PostModule,
    CommentModule,
    PostLikeModule,
    NotificationModule,
    PhotoCommentModule,
    PhotoLikeModule,
    UserUploadModule,
    PostUploadModule,
  ],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    
    ClassSerializerInterceptor, 
  ],
})
export class AppModule {}
