/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-12 14:20:27
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-16 14:03:54
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Module } from "@nestjs/common"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { JwtModule } from "@nestjs/jwt"
import { PassportModule } from "@nestjs/passport"
import { MulterModule } from "@nestjs/platform-express"
import { TypeOrmModule } from "@nestjs/typeorm"
import { diskStorage } from "multer"
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
import { UploadController } from "./upload/upload.controller"
import { UserController } from "./users/user.controller"
import { UserCouponAutoController } from "./users/user.coupon.auto.controller"
import { v4 as uuidv4 } from 'uuid';
import { extname } from "path"

const controllers = [
  AppController,
  AuthController,
  UploadController,
  UserController,
  HelloController,
  UserCouponAutoController
]
// const controllers = [ 
  
// ]

@Module({
  imports: [
    // 默认使用jwt进行认证
    PassportModule.register({ defaultStrategy:'jwt' }),
    // 配置jwt认证模块
    JwtModule.register({ secret: JwtConstants.secret, signOptions: JwtConstants.signOptions }),
    MulterModule.register()
    // MulterModule.registerAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     storage: diskStorage({
    //       destination: process.cwd() + configService.get<string>('UPLOAD_PATH'),
    //       filename: (req, file:Express.Multer.File, cb) => {
    //         //const extName = file.originalname.slice(file.originalname.lastIndexOf('.'))
            
    //         const now = new Date();
    //         const path = `${now.getFullYear()}/${now.getMonth()}/${now.getDay()}`
    //         const randomName = uuidv4();
    //         const fileName = `/${path}/${randomName}${extname(file.originalname)}`;

    //         console.log(fileName);
    //         cb(null, fileName)
    //       }
    //     })
    //   }),
    //   inject: [ConfigService],
    // })
  ],
  controllers: [
    ...controllers
  ],
  providers: [JwtStrategy],
})
export class WebModule {}