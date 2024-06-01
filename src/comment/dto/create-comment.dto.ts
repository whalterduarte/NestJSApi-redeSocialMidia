// create-comment.dto.ts

import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty({ message: 'O comentário é obrigatório' })
  content: string;

  @IsString()
  @IsNotEmpty()
  postId: string;
}
