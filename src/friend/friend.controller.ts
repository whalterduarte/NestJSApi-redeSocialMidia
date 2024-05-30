import { Controller, Get, UseGuards } from '@nestjs/common';
import { FriendService } from './friend.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { GetUserId } from '../auth/get-user.decorator';

@Controller('friends')
@UseGuards(AuthGuard)
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Get()
  findAll(@GetUserId() userId: string) {
    return this.friendService.findAll(userId);
  }
}
