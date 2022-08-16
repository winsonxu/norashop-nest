/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-12 15:04:07
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-16 00:15:39
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EntityClassOrSchema } from "@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { ApiConfigService } from "src/core/shared/api-config.service";
import { SharedModule } from "src/core/shared/shared.module";
import { UserCouponAutoEntity } from "../entities/user.coupon.auto.entity";
import { UserEntity } from "../entities/user.entity";
import { AppService } from "./app.service";
import { HelloService } from "./hello.service";
import { UploadService } from "./upload.service";
import { UserCouponAutoService } from "./user.coupon.auto.service";
import { UserService } from "./user.service";

const providers = [
  AppService,
  UploadService,
  UserService,
  HelloService,
  UserCouponAutoService
]

const entities = [
  UserEntity,
  UserCouponAutoEntity
]

@Global()
@Module({
  imports: [ TypeOrmModule.forFeature(entities) ],
  providers,
  exports: [...providers],
})
export class ServiceModule {}