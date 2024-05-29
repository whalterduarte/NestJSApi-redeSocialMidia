import { Injectable } from '@nestjs/common';
import { CreatePhotoCommentDto } from './dto/create-photo-comment.dto';
import { UpdatePhotoCommentDto } from './dto/update-photo-comment.dto';

@Injectable()
export class PhotoCommentService {
  create(createPhotoCommentDto: CreatePhotoCommentDto) {
    return 'This action adds a new photoComment';
  }

  findAll() {
    return `This action returns all photoComment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} photoComment`;
  }

  update(id: number, updatePhotoCommentDto: UpdatePhotoCommentDto) {
    return `This action updates a #${id} photoComment`;
  }

  remove(id: number) {
    return `This action removes a #${id} photoComment`;
  }
}
