import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class CustomUserGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const loggedInUsername = request.user.username;
    const requestedUsername = request.params.username;

    if (loggedInUsername !== requestedUsername) {
      throw new UnauthorizedException(`Você não tem permissão para acessar este recurso `);
    }

    return true;
  }
}
