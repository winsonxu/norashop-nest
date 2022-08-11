/*
 * @Author: winsonxu 
 * @Date: 2022-08-11 16:44:42 
 * @Last Modified by:   winsonxu 
 * @Last Modified time: 2022-08-11 16:44:42 
 */
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JsonResult } from 'src/core/common/json-result';
export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return data instanceof JsonResult
          ? data
          : {
              message: 'success',
              code: 0,
              data,
            };
      }),
    );
  }
}
