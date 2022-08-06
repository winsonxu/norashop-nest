import { HttpStatus } from '@nestjs/common/enums/http-status.enum';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

export class BusinessException extends HttpException {
  constructor(code: number, message: string) {
    super({ code, message }, HttpStatus.OK);
  }
}
