/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-07 21:10:19
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-15 12:15:40
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from '@nestjsx/crud';
import { UserEntity } from 'src/modules/entities/user.entity';
import { UserService } from '../../services/user.service';

@Crud({
  model: {
    type: UserEntity,
  },
})
@Controller('web/user')
@UseGuards(AuthGuard('jwt'))
export class UserController implements CrudController<UserEntity>  {
  constructor(public readonly service: UserService){}


  // @Get('list')
  // async getUsers(@User() user: UserEntity): Promise<UserEntity[]> {
  //   console.log('user', user);
  //   const manager =  datasource.manager.getRepository(UserEntity)
  //   const users = await manager.find();
  //   return users;
  // }
  
  // @Get('detail/:id')
  // async getUserById(@Param('id') id:number) : Promise<UserEntity | null>{
  //   console.log(id);
  //   const manager =  datasource.manager.getRepository(UserEntity)
  //   const user = await manager.findOne({ where : {id: id } });
  //   return user;
  // }

  // @Post('create')
  // async addUser(@Body() user:UserEntity) : Promise<UserEntity>{
  //   const manager =  datasource.manager
  //   const result = await manager.save(Object.assign(new UserEntity, user));
  //   return result;
  // }

  @Post('setPassword')
  async setPassword(@Body("id") id:number, @Body("password") password:string): Promise<void>{
    return this.service.setPassword(id, password);
  }

}