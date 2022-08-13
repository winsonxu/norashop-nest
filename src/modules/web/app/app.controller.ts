/*
 * @Author: winsonxu 
 * @Date: 2022-08-11 16:45:12 
 * @Last Modified by:   winsonxu 
 * @Last Modified time: 2022-08-11 16:45:12 
 */
import { Controller, Get } from '@nestjs/common';
import { JsonResult } from 'src/core/common/json-result';
import { AppService } from 'src/modules/services/app.service';

@Controller('web')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return 'Norait';
  }

  @Get('hello2')
  getHello2() {
    return JsonResult.ok(10, '成功了');
  }

  @Get('UserException')
  getUserException() {
    return JsonResult.error(-1, '不允许操作');
  }

  @Get('exception')
  getException() {
    return this.appService.getException();
  }

  @Get('unhandledException')
  getUnhandledException() {
    throw new Error(`Unhandled exception`);
  }
}
