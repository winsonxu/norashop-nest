/*
 * @Author: winsonxu 
 * @Date: 2022-08-11 16:45:00 
 * @Last Modified by:   winsonxu 
 * @Last Modified time: 2022-08-11 16:45:00 
 */

// 这段必须要放在import { AppModule } from './app.module'之前
import { CrudConfigService } from '@nestjsx/crud';
// CRUD启用更新
CrudConfigService.load({
  routes: {
    updateOneBase: {
      allowParamsOverride: true,
    }
  },
});

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './core/interceptor/transform.interceptor';
import { ConfigService } from '@nestjs/config';
import { GlobalExceptionFilter } from './core/filter/global-exception.filter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 启用跨域
  app.enableCors();

  // 统一返回值 JsonResult | {"message": string,"code": number,"data": any}
  app.useGlobalInterceptors(new TransformInterceptor());

  // 统一异常处理[BusinessException业务类异常, HttpException, 其它异常]
  app.useGlobalFilters(new GlobalExceptionFilter());


  // 读取.env的配置
  const config = app.get(ConfigService);
  const port = config.get<number>('PORT', 58511);
  const host = config.get<string>('HOST', 'localhost');
  await app.listen(port, host, () => {
    Logger.log(`服务已经启动，请访问 http://${host}:${port}`);
  });
}
bootstrap();
