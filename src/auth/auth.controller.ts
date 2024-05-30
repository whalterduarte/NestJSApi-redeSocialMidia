import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  async signIn(@Body() signInDto: { email: string; password: string }) {
    try {
      const token = await this.authService.signIn(signInDto.email, signInDto.password);
      return { token };
    } catch (error) {
      throw error;
    }
  }
}
