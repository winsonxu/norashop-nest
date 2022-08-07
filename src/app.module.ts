import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './modules/app.controller';
import { AppService } from './modules/app.service';
import { HelloModule } from './modules/hello/hello.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './modules/users/user.controller';
import { SharedModule } from './core/shared/shared.module';
import { ApiConfigService } from './core/shared/services/api-config.service';
// import config from './config/config';
@Module({
  imports: [
    HelloModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (configService: ApiConfigService) => configService.TypeOrmConfig,
      inject: [ApiConfigService],
    }),
  ],
  controllers: [
    AppController,
    UsersController,
  ],
  providers: [AppService],
})
export class AppModule {}
