import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O campo name é obrigatório' })
  name: string;

  @IsEmail({}, { message: 'O campo email deve ser um endereço de e-mail válido' })
  @IsNotEmpty({ message: 'O campo email é obrigatório' })
  email: string;

  @IsNotEmpty({ message: 'O campo password é obrigatório' })
  password: string;

  @IsOptional()
  phone?: string;

  @IsOptional()
  file?: string;

  @IsOptional()
  bio?: string;
}
