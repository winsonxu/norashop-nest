import { Module } from "@nestjs/common"
import { JwtModule } from "@nestjs/jwt"
import { PassportModule } from "@nestjs/passport"
import { JwtConstants } from "src/core/jwt/jwt.constants"
import { JwtStrategy } from "src/core/jwt/jwt.strategy"
import { AppService } from "../services/app.service"
import { HelloService } from "../services/hello.service"
import { ServiceModule } from "../services/services.module"
import { UserService } from "../services/user.service"
import { AppController } from "./app/app.controller"
import { AuthController } from "./auth/auth.controller"
import { HelloController } from "./hello/hello.controller"
import { UsersController } from "./users/user.controller"

const controllers = [
  AppController,
  AuthController,
  UsersController,
  HelloController
]

@Module({
  imports: [
    ServiceModule,
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