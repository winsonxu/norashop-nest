/*
 * @Author: winsonxu 
 * @Date: 2022-08-11 16:43:46 
 * @Last Modified by:   winsonxu 
 * @Last Modified time: 2022-08-11 16:43:46 
 */

import { Controller, Get } from '@nestjs/common';
import { HelloService } from 'src/modules/services/hello.service';
import { JsonResult } from '../../../core/common/json-result';

@Controller('web/hello')
export class HelloController {
  constructor(private readonly service: HelloService) {}

  @Get()
  getHello() {
    return this.service.getHello();
  }
  
}
