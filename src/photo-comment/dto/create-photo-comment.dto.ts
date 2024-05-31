import { IsNotEmpty, IsString } from "class-validator";

export class CreatePhotoCommentDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  photoId: number;

  @IsString()
  @IsNotEmpty()
  authorId: string;
}
