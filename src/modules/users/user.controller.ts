/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-07 21:10:19
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-11 20:36:28
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { Md5 } from 'md5-typescript';
import { User } from 'src/core/decorator/user.decorator';
import { BusinessException } from 'src/core/exception/business.exception';
import { JwtPayload } from 'src/core/jwt/jwt.payload';
import { JsonResult } from '../../core/common/json-result';
import datasource from '../../database/datasource';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService,
    private readonly jwtService: JwtService){}

  @Post('login')
  async login(@Body('username')username:string, @Body('password')password:string): Promise<string> {
    const user:UserEntity = await this.userService.getByAccount(username);
    if(!user) throw new BusinessException(40001, '用户不存在');
    const md5password = Md5.init(password)
    console.log(password)
    console.log(md5password)
    
    if(user.password.toLocaleLowerCase() !== md5password.toLocaleLowerCase()) throw new BusinessException(40002, '密码不正确')
    const role:any[] = [] // TODO：这里需要获取角色权限列表
    const payload = new JwtPayload(user.username, user.id, role);
    const token:string = await this.jwtService.signAsync(payload.toJSON());
    return token;
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getUsers(@User() user: UserEntity): Promise<UserEntity[]> {
    console.log('user', user);
    const manager =  datasource.manager.getRepository(UserEntity)
    const users = await manager.find();
    return users;
  }
  
  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async getUserById(@Param('id') id:number) : Promise<UserEntity>{
    console.log(id);
    const manager =  datasource.manager.getRepository(UserEntity)
    const user = await manager.findOne({ where : {id: id } });
    return user;
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async addUser(@Body() user:UserEntity) : Promise<UserEntity>{
    
    const manager =  datasource.manager
    const result = await manager.save(Object.assign(new UserEntity, user));
    return result;
  }
}