import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Whalter Duarte | Social Midia project';
  }
}
