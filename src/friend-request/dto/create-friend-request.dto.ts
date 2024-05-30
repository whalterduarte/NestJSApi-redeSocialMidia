import { IsNotEmpty } from 'class-validator';

export class CreateFriendRequestDto {
  requesterId: string;

  @IsNotEmpty({ message: 'O campo requesteeId é obrigatório' })
  requesteeId: string;
}

export class AcceptFriendRequestDto {
  @IsNotEmpty({ message: 'O campo requestId é obrigatório' })
  requestId: number;
}
