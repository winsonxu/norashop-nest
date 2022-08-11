import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { BusinessException } from 'src/core/exception/business.exception';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    console.log(exception);
    if (exception instanceof BusinessException) {
      // 断言UserException类型主体一个是有{code,message}类型
      response.status(exception.getStatus()).json(exception.getResponse());
    } else if (exception instanceof HttpException) {
      const status = exception.getStatus();
      response.status(status).json({
        code: status,
        message: exception.message,
      });
    } else {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'error',
      });
    }
  }
}
