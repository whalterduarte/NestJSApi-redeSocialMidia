import { IsNotEmpty } from 'class-validator';

export class CreateFriendRequestDto {
  @IsNotEmpty({ message: 'O campo requesterId é obrigatório' })
  requesterId: string;

  @IsNotEmpty({ message: 'O campo requesteeId é obrigatório' })
  requesteeId: string;
}
