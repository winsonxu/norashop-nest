/*
 * @Author: winsonxu 
 * @Date: 2022-08-11 16:45:03 
 * @Last Modified by:   winsonxu 
 * @Last Modified time: 2022-08-11 16:45:03 
 */
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SharedModule } from './core/shared/shared.module';
import { ApiConfigService } from './core/shared/api-config.service';
import { WebModule } from './modules/web/web.module';
import { MobileModule } from './modules/mobile/mobile.module';
import { AppService } from './modules/services/app.service';
import { HelloService } from './modules/services/hello.service';
import { UserService } from './modules/services/user.service';
import { UserEntity } from './modules/entities/user.entity';
import { SnakeNamingStrategy } from './core/common/snake-naming.strategy';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

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
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    WebModule,
    MobileModule
  ]
})
export class AppModule {}
