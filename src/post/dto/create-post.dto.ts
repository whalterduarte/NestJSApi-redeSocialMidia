import { IsString, IsOptional } from 'class-validator';

export class CreatePostDto {
  @IsString()
  content: string;

  @IsString()
  @IsOptional()
  file?: string;

  @IsString()
  visibility: 'public' | 'private';
}
