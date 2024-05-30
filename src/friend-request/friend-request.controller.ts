import { Controller, Get, Post, Body, Param, UseGuards, Patch } from '@nestjs/common';
import { FriendRequestService } from './friend-request.service';
import { CreateFriendRequestDto } from './dto/create-friend-request.dto';
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

  @Get('received')
  getReceivedFriendRequests(@GetUserId() userId: string) {
    return this.friendRequestService.getReceivedRequests(userId);
  }

  @Patch(':id/accept')
  acceptFriendRequest(
    @Param('id') id: string,
    @GetUserId() userId: string,
  ) {
    return this.friendRequestService.acceptFriendRequest(parseInt(id, 10), userId);
  }
}
