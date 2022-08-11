import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { JsonResult } from '../core/common/json-result';

@Controller()
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

  @Get('/UserException')
  getUserException() {
    return JsonResult.error(-1, '不允许操作');
  }

  @Get('/exception')
  getException() {
    return this.appService.getException();
  }

  @Get('/unhandledException')
  getUnhandledException() {
    throw new Error(`Unhandled exception`);
  }
}
