/*
 * @Author: winsonxu 
 * @Date: 2022-08-11 16:45:03 
 * @Last Modified by:   winsonxu 
 * @Last Modified time: 2022-08-11 16:45:03 
 */
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from './core/shared/shared.module';
import { ApiConfigService } from './core/shared/services/api-config.service';
import { WebModule } from './modules/web/web.module';
import { MobileModule } from './modules/mobile/mobile.module';
import { AppService } from './modules/services/app.service';
import { HelloService } from './modules/services/hello.service';
import { UserService } from './modules/services/user.service';

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
    WebModule,
    MobileModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
