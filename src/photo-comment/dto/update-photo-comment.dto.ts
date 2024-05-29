import { PartialType } from '@nestjs/mapped-types';
import { CreatePhotoCommentDto } from './create-photo-comment.dto';

export class UpdatePhotoCommentDto extends PartialType(CreatePhotoCommentDto) {}
