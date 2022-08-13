/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-12 14:20:36
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-12 15:06:33
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Module } from "@nestjs/common"
import { ServiceModule } from "../services/services.module"
import { UserController } from "./users/user.controller"

const controllers = [
  UserController,
]

// const services = [
//   AppService,
//   UserService,
//   HelloService
// ]

@Module({
  imports: [ServiceModule],
  controllers: [...controllers],
  providers: []
})
export class MobileModule {}