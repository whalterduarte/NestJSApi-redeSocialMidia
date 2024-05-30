import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard'
import type { Multer } from 'multer';
import { CustomUserGuard } from 'src/auth/auth.user.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  
  @Post('register')
  @UseInterceptors(FileInterceptor('file')) 
  async create(@Body() createUserDto: CreateUserDto, @UploadedFile() file: Multer.File) {
    const createUserDtoWithFile = { ...createUserDto, file };
    return this.userService.create(createUserDtoWithFile);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
  @UseGuards(AuthGuard, CustomUserGuard)
  @Patch('profile/:username')
  update(@Param('username') username: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(username, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
