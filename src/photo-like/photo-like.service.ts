import { Injectable } from '@nestjs/common';
import { CreatePhotoLikeDto } from './dto/create-photo-like.dto';
import { UpdatePhotoLikeDto } from './dto/update-photo-like.dto';

@Injectable()
export class PhotoLikeService {
  create(createPhotoLikeDto: CreatePhotoLikeDto) {
    return 'This action adds a new photoLike';
  }

  findAll() {
    return `This action returns all photoLike`;
  }

  findOne(id: number) {
    return `This action returns a #${id} photoLike`;
  }

  update(id: number, updatePhotoLikeDto: UpdatePhotoLikeDto) {
    return `This action updates a #${id} photoLike`;
  }

  remove(id: number) {
    return `This action removes a #${id} photoLike`;
  }
}
