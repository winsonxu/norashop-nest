/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-12 14:20:27
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-13 16:18:04
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Module } from "@nestjs/common"
import { JwtModule } from "@nestjs/jwt"
import { PassportModule } from "@nestjs/passport"
import { TypeOrmModule } from "@nestjs/typeorm"
import { JwtConstants } from "src/core/jwt/jwt.constants"
import { JwtStrategy } from "src/core/jwt/jwt.strategy"
import { ApiConfigService } from "src/core/shared/api-config.service"
import { SharedModule } from "src/core/shared/shared.module"
import { UserEntity } from "../entities/user.entity"
import { AppService } from "../services/app.service"
import { HelloService } from "../services/hello.service"
import { ServiceModule } from "../services/services.module"
import { UserService } from "../services/user.service"
import { AppController } from "./app/app.controller"
import { AuthController } from "./auth/auth.controller"
import { HelloController } from "./hello/hello.controller"
import { UserController } from "./users/user.controller"

const controllers = [
  AppController,
  AuthController,
  UserController,
  HelloController
]

@Module({
  imports: [
    // 默认使用jwt进行认证
    PassportModule.register({ defaultStrategy:'jwt' }),
    // 配置jwt认证模块
    JwtModule.register({ secret: JwtConstants.secret, signOptions: JwtConstants.signOptions }),

  ],
  controllers: [
    ...controllers
  ],
  providers: [JwtStrategy],
})
export class WebModule {}