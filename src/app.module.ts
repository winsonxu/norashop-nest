import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './modules/app.controller';
import { AppService } from './modules/app.service';
import { HelloModule } from './modules/hello/hello.module';
// import config from './config/config';
@Module({
  imports: [
    HelloModule,
    ConfigModule.forRoot({
      // load: [config],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
