import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserUploadService } from 'src/modules/upload/user-upload/user-upload.service';
import * as bcrypt from 'bcrypt';
import { validate } from 'class-validator';
import { User } from '@prisma/client';


@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly uploadService: UserUploadService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const errors = await validate(createUserDto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    const { name, email, password, phone, bio, file, username } = createUserDto;
    const existingUser = await this.prisma.user.findUnique({
      where: { 
        email,
        username
       },
    });

    if (existingUser) {
      throw new ConflictException('Usuário já cadastrado!');
    }
    const hashedPassword = await bcrypt.hash(password, 10)
  
    let fileUrl: string | null = null;
    if (file) {
      fileUrl = await this.uploadService.saveUserFile(file);
    }

    return this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone,
        bio,
        username,
        file: fileUrl,
      },
    });
  }



  async findAll() {
    const allUser = await this.prisma.user.findMany({})
    return allUser
  }

  async findOne(username) {
    
    const user = await this.prisma.user.findUnique({
      where: {username}
    });
    
    if (!user){
      throw new NotFoundException(`Usuário com username '${username}' não encontrado`);
    }
    return user
}

  async update(username: string, updateUserDto: UpdateUserDto): Promise<User> {
    const existingUser = await this.prisma.user.findUnique({
      where: { 
        username
       },
    });

    if (!existingUser) {
      throw new NotFoundException(`Usuário não encontrado com o username: ${username}`);
    }

    const updatedUser = await this.prisma.user.update({
      where: { username },
      data: updateUserDto,
    });

    return updatedUser;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
