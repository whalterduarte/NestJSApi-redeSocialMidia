import { IsEmail, IsNotEmpty, IsOptional, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O campo name é obrigatório' })
  name: string;

  @IsNotEmpty({ message: 'O campo username é obrigatório' })
  @Matches(/^[a-zA-Z0-9._]+$/, { message: 'O campo username deve conter apenas letras, números, pontos e sublinhados' })
  username: string;

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
