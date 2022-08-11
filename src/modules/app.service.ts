/*
 * @Author: 2022-8-11 17:05:34
 * @Date: winsonxu
 * Copyright (c) 2016-2022 norait
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
