import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePhotoLikeDto {
  @IsNotEmpty()
  @IsNumber()
  photoId: number;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
