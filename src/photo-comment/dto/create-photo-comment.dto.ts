import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePhotoCommentDto {
  @IsString()
  @IsNotEmpty({ message: 'O comentário é obrigatório' })
  content: string;

  @IsString()
  @IsNotEmpty()
  photoId: string;
}
