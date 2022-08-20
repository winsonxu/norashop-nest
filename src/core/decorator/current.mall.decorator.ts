/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-20 19:05:19
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-20 23:02:00
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { MallEntity } from "src/modules/entities/mall.entity";
import { UserEntity } from "src/modules/entities/user.entity";
/**
 * @description: 控制器方法使用@User注解或使用@User['字段']
 * @return {*}
 */
export const CurrentMall = createParamDecorator(
  async (data:string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const mall:MallEntity = request.user.mall;
    return mall;
  }
)