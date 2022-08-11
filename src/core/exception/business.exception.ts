/*
 * @Author: winsonxu 
 * @Date: 2022-08-11 16:44:34 
 * @Last Modified by:   winsonxu 
 * @Last Modified time: 2022-08-11 16:44:34 
 */
import { HttpStatus } from '@nestjs/common/enums/http-status.enum';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

export class BusinessException extends HttpException {
  constructor(code: number, message: string) {
    super({ code, message }, HttpStatus.OK);
  }
}
