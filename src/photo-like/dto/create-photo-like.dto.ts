import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePhotoLikeDto {
  @IsNotEmpty()
  @IsNumber()
  photoId: number;
}
