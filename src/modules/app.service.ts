/*
 * @Author: winsonxu 
 * @Date: 2022-08-11 16:45:07 
 * @Last Modified by:   winsonxu 
 * @Last Modified time: 2022-08-11 16:45:07 
 */
import { HttpException, Injectable } from '@nestjs/common';
import { BusinessException } from '../core/exception/business.exception';

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
