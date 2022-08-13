/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-07 21:10:19
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-13 13:18:27
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/core/decorator/user.decorator';
import { UserEntity } from 'src/modules/entities/user.entity';
import datasource from '../../../database/datasource';
import { UserService } from '../../services/user.service';

@Controller('web/user')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private readonly userService: UserService){}

  @Get('list')
  async getUsers(@User() user: UserEntity): Promise<UserEntity[]> {
    console.log('user', user);
    const manager =  datasource.manager.getRepository(UserEntity)
    const users = await manager.find();
    return users;
  }
  
  @Get('detail/:id')
  async getUserById(@Param('id') id:number) : Promise<UserEntity | null>{
    console.log(id);
    const manager =  datasource.manager.getRepository(UserEntity)
    const user = await manager.findOne({ where : {id: id } });
    return user;
  }

  @Post('create')
  async addUser(@Body() user:UserEntity) : Promise<UserEntity>{
    const manager =  datasource.manager
    const result = await manager.save(Object.assign(new UserEntity, user));
    return result;
  }

  @Post('setPassword')
  async setPassword(@Body("id") id:number, @Body("password") password:string): Promise<void>{
    return this.userService.setPassword(id, password);
  }

}