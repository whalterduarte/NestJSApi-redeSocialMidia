import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async signIn(email: string, password: string): Promise<{ token: string }> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user || !await bcrypt.compare(password, user.password)) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    const payload = { userId: user.id, email: user.email, username: user.username };
    const token = await this.jwtService.signAsync(payload);
    return { token };
  }
}
