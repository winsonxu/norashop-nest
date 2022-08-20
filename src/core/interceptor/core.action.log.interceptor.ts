/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-20 19:24:02
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-20 20:09:23
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Inject } from "@nestjs/common";
import { Observable } from "rxjs";
import { CoreActionLogEntity } from "src/modules/entities/core.action.log.entity";
import { UserEntity } from "src/modules/entities/user.entity";
import { CoreActionLogService } from "src/modules/services/core.action.log.service";
import { SnowflakeIdGenerate } from "../utils/snowflakeId.generate";
import { tap } from 'rxjs/operators';

@Injectable()
export class CoreActionLogInterceptor<T> implements NestInterceptor {
  @Inject()
  coreActionLogService: CoreActionLogService

  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<any> {
    console.log('CoreActionLog Before...');
    const now = Date.now();
    const host = context.switchToHttp();
    const request = host.getRequest();
    const user:UserEntity = request.user;
    console.log('request.headers', request.headers);
    const mallId = request.headers.mallid || '0'
    const log:CoreActionLogEntity  = new CoreActionLogEntity({
      id: SnowflakeIdGenerate.generate(),
      userId: user.id,
      mallId: user.mallId,
      model: request.url,
      modelId: '11',
      remark: '更新数据'
    })
    log.save();
    return next.handle().pipe(
        tap(() => console.log(`After... ${Date.now() - now}ms`)),
      );
  }
}