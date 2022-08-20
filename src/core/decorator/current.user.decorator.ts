/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-11 19:19:49
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-20 23:02:18
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserEntity } from "src/modules/entities/user.entity";
/**
 * @description: 控制器方法使用@CurrentUser注解或使用@CurrentUser['字段']
 * @return {*}
 */
export const CurrentUser = createParamDecorator(
  (data:string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user.user;
  return data ? user && user[data] : user;
  }
)