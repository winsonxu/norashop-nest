/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-07 21:10:19
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-13 16:31:38
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/core/decorator/user.decorator';
import { ApiConfigService } from 'src/core/shared/api-config.service';
import { UserEntity } from 'src/modules/entities/user.entity';
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
  async getUserById(@Param('id') id:number) : Promise<UserEntity | null>{
    console.log(id);
    const manager =  this.apiConfigService.TypeOrmDatasource.manager.getRepository(UserEntity)
    const user = await manager.findOne({ where : {id: id } });
    return user;
  }

  @Post('')
  async addUser(@Body() user:UserEntity) : Promise<UserEntity>{
    
    const manager =  this.apiConfigService.TypeOrmDatasource.manager
    const result = await manager.save(Object.assign(new UserEntity, user));
    return result;
  }

}