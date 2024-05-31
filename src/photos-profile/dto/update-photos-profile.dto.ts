import { PartialType } from '@nestjs/mapped-types';
import { CreatePhotosProfileDto } from './create-photos-profile.dto';

export class UpdatePhotosProfileDto extends PartialType(CreatePhotosProfileDto) {}
