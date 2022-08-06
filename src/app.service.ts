import { HttpException, Injectable } from '@nestjs/common';
import { BusinessException } from './exception/BusinessException';

@Injectable()
export class AppService {
  getUjfsklserException() {
    throw new Error('Method not implemented.');
  }
  getUserException() {
    throw new BusinessException(40010, '您无权登录');
  }
  getHello(): string {
    return 'Hello World!';
  }
  getException() {
    throw new HttpException('方法未实现', 404);
  }
}
