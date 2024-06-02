import { IsString } from 'class-validator';

export class CreatePostLikeDto {
  @IsString()
  postId: string;
}
