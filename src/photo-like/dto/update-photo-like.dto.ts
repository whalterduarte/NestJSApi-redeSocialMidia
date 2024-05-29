import { PartialType } from '@nestjs/mapped-types';
import { CreatePhotoLikeDto } from './create-photo-like.dto';

export class UpdatePhotoLikeDto extends PartialType(CreatePhotoLikeDto) {}
