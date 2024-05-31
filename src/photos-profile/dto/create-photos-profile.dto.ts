import { IsNotEmpty, IsString } from "class-validator";

export class CreatePhotosProfileDto {
  @IsString()
  @IsNotEmpty({ message: 'A foto é obrigatória' })
  url: string;
  
  @IsString()
  descript: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
