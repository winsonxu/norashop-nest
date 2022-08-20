/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-20 22:13:30
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-20 23:13:18
 * @Description: 商城接口守卫
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Injectable, CanActivate, ExecutionContext, mixin, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

export function MallGuard(type?: string | string[]) {
  return mixin(class ScopesAuth extends AuthGuard(type) {
      handleRequest(err:any, user:any, info:any, context:any) {
        if (err || !user || !user.mall) {
            throw err || new UnauthorizedException();
        }      
        return user;
      }
  });
}
