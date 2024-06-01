// create-post-like.dto.ts

import { IsString } from 'class-validator';

export class CreatePostLikeDto {
  @IsString()
  postId: string;
}
