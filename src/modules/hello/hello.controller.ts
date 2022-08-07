import { Controller, Get } from '@nestjs/common';
import { JsonResult } from '../../core/common/domin/JsonResult';
import { HelloService } from './hello.service';

@Controller('/hello')
export class HelloController {
  constructor(private readonly service: HelloService) {}

  @Get()
  getHello() {
    return this.service.getHello();
  }
}
