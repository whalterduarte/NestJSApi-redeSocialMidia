import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhotoCommentService } from './photo-comment.service';
import { CreatePhotoCommentDto } from './dto/create-photo-comment.dto';
import { UpdatePhotoCommentDto } from './dto/update-photo-comment.dto';

@Controller('photo-comment')
export class PhotoCommentController {
  constructor(private readonly photoCommentService: PhotoCommentService) {}

  @Post()
  create(@Body() createPhotoCommentDto: CreatePhotoCommentDto) {
    return this.photoCommentService.create(createPhotoCommentDto);
  }

  @Get()
  findAll() {
    return this.photoCommentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photoCommentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhotoCommentDto: UpdatePhotoCommentDto) {
    return this.photoCommentService.update(+id, updatePhotoCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photoCommentService.remove(+id);
  }
}
