import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getLandingPage(): string {
    return 'Welcome to the application!';
  }
}
