import { Injectable } from '@nestjs/common';

//app.service.ts	具有单一方法的基本服务（service）。 method.

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
