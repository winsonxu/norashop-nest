/*
 * @Author: winsonxu 
 * @Date: 2022-08-11 16:45:03 
 * @Last Modified by:   winsonxu 
 * @Last Modified time: 2022-08-11 16:45:03 
 */
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './modules/app.controller';
import { AppService } from './modules/app.service';
import { HelloModule } from './modules/hello/hello.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './modules/users/user.controller';
import { SharedModule } from './core/shared/shared.module';
import { ApiConfigService } from './core/shared/services/api-config.service';
import { UserService } from './modules/users/user.service';
import { JwtStrategy } from './core/jwt/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from './core/jwt/jwt.constants';
// import config from './config/config';
// 应该模块
const appModules = [
  HelloModule
]
const appProvides = [
  UserService
]
@Module({
  imports: [
    // 读取.env配置
    ConfigModule.forRoot({ isGlobal: true, }), 
    // 使用TypeORM
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (configService: ApiConfigService) => configService.TypeOrmConfig,
      inject: [ApiConfigService],
    }),
    // 默认使用jwt进行认证
    PassportModule.register({ defaultStrategy:'jwt' }),
    // 配置jwt认证模块
    JwtModule.register({ secret: JwtConstants.secret, signOptions: JwtConstants.signOptions }),
    ...appModules
  ],
  controllers: [
    AppController,
    UsersController,
  ],
  providers: [AppService, JwtStrategy, ...appProvides],
})
export class AppModule {}
