import { HttpException, Injectable } from '@nestjs/common';
import { BusinessException } from '../../core/exception/BusinessException';

@Injectable()
export class HelloService {
  getHello(): string {
    return 'Hello World!';
  }

}