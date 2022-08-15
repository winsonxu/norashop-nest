/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-07 21:10:19
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-15 11:22:56
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/core/decorator/user.decorator';
import { ApiConfigService } from 'src/core/shared/api-config.service';
import { UserEntity } from 'src/modules/entities/user.entity';
import { FindOptionsWhere } from 'typeorm';
import { UserService } from '../../services/user.service';

@Controller('mobile/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly apiConfigService: ApiConfigService
    ){}

  @Get('list')
  async getUsers(@User() user: UserEntity): Promise<UserEntity[]> {
    console.log('user', user);
    const manager =  this.apiConfigService.TypeOrmDatasource.manager.getRepository(UserEntity)
    const users = await manager.find();
    return users;
  }
  
  @Get(':id')
  async getUserById(@Param('id') id:string) : Promise<UserEntity | null>{
    console.log(id);
    const manager =  this.apiConfigService.TypeOrmDatasource.manager.getRepository(UserEntity)
    const where:FindOptionsWhere<UserEntity> = { id }
    const user = await manager.findOne({ where });
    return user;
  }

  @Post('')
  async addUser(@Body() user:UserEntity) : Promise<UserEntity>{
    
    const manager =  this.apiConfigService.TypeOrmDatasource.manager
    const result = await manager.save(Object.assign(new UserEntity, user));
    return result;
  }

}