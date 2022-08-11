/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-11 19:19:49
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-11 19:28:43
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const User = createParamDecorator(
  (data:string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

  return data ? user && user[data] : user;
  }
)