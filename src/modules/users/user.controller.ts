import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { JsonResult } from '../../core/common/domin/JsonResult';
import datasource from '../../database/datasource';
import { UserEntity } from './user.entity';

@Controller('users')
export class UsersController {

  @Get()
  async getUsers(): Promise<UserEntity[]> {
    const manager =  datasource.manager.getRepository(UserEntity)
    const users = await manager.find();
    return users;
  }
  
  @Get(':id')
  async getUserById(@Param('id') id:number) : Promise<UserEntity>{
    console.log(id);
    const manager =  datasource.manager.getRepository(UserEntity)
    const user = await manager.findOne({ where : {id: id } });
    return user;
  }

  @Post()
  async addUser(@Body() user:UserEntity) : Promise<UserEntity>{
    
    const manager =  datasource.manager
    const result = await manager.save(Object.assign(new UserEntity, user));
    return result;
  }
}