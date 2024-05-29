import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhotoLikeService } from './photo-like.service';
import { CreatePhotoLikeDto } from './dto/create-photo-like.dto';
import { UpdatePhotoLikeDto } from './dto/update-photo-like.dto';

@Controller('photo-like')
export class PhotoLikeController {
  constructor(private readonly photoLikeService: PhotoLikeService) {}

  @Post()
  create(@Body() createPhotoLikeDto: CreatePhotoLikeDto) {
    return this.photoLikeService.create(createPhotoLikeDto);
  }

  @Get()
  findAll() {
    return this.photoLikeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photoLikeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhotoLikeDto: UpdatePhotoLikeDto) {
    return this.photoLikeService.update(+id, updatePhotoLikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photoLikeService.remove(+id);
  }
}
