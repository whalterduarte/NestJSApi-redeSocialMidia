import { IsNotEmpty } from 'class-validator';

export class CreateFriendRequestDto {
  requesterId: string;

  @IsNotEmpty({ message: 'O campo requesteeId é obrigatório' })
  requesteeId: string;
}
