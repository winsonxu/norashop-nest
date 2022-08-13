/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-12 15:04:07
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-13 16:27:33
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { ApiConfigService } from "src/core/shared/api-config.service";
import { SharedModule } from "src/core/shared/shared.module";
import { UserEntity } from "../entities/user.entity";
import { AppService } from "./app.service";
import { HelloService } from "./hello.service";
import { UserService } from "./user.service";

const providers = [
  AppService,
  UserService,
  HelloService
]

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity
    ])
  ],
  providers,
  exports: [...providers],
})
export class ServiceModule {}