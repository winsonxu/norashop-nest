/*
 * @Author: winsonxu 
 * @Date: 2022-08-11 16:44:50 
 * @Last Modified by:   winsonxu 
 * @Last Modified time: 2022-08-11 16:44:50 
 */
import { Global, Module } from '@nestjs/common';
import { ApiConfigService } from './api-config.service';


const providers = [
  ApiConfigService,
];

@Global()
@Module({
  providers,
  exports: [...providers],
})
export class SharedModule {}
