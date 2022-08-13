import { HttpException, Injectable } from '@nestjs/common';
import { BusinessException } from '../../core/exception/business.exception';

@Injectable()
export class HelloService {
  getHello(): string {
    return 'Hello World!';
  }

}