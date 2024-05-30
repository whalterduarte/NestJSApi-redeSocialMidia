import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FriendRequestService } from './friend-request.service';
import { CreateFriendRequestDto } from './dto/create-friend-request.dto';
import { UpdateFriendRequestDto } from './dto/update-friend-request.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { GetUserId } from '../auth/get-user.decorator';

@Controller('friend-requests')
@UseGuards(AuthGuard)
export class FriendRequestController {
  constructor(private readonly friendRequestService: FriendRequestService) {}
  
  @Post()
  sendFriendRequest(
    @Body() createFriendRequestDto: CreateFriendRequestDto,
    @GetUserId() userId: string,
  ) {
    return this.friendRequestService.create(createFriendRequestDto, userId);
  }






  @Get()
  findAll() {
    return this.friendRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.friendRequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFriendRequestDto: UpdateFriendRequestDto) {
    return this.friendRequestService.update(+id, updateFriendRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.friendRequestService.remove(+id);
  }
}
