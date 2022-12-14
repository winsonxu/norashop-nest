/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-07 21:10:19
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-21 11:13:16
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Body, Controller, Get, Param, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from '@nestjsx/crud';
import { CurrentMall } from 'src/core/decorator/current.mall.decorator';
import { CurrentUser } from 'src/core/decorator/current.user.decorator';
import { CoreActionLogInterceptor } from 'src/core/interceptor/core.action.log.interceptor';
import { JwtPayload } from 'src/core/jwt/jwt.payload';
import { MallEntity } from 'src/modules/entities/mall.entity';
import { isAdmin, UserEntity } from 'src/modules/entities/user.entity';
import { UserService } from '../../services/user.service';

@Crud({
  model: {
    type: UserEntity,
  },
//   routes:{
//   updateOneBase: {
//     allowParamsOverride: true
//   },
// }
})
@Controller('web/user')
@UseGuards(AuthGuard('jwt'))
export class UserController implements CrudController<UserEntity>  {
  constructor(public readonly service: UserService,
    private readonly jwtService: JwtService){}
  @Get('test')
  async getMall(@CurrentUser() currentUser:any, @CurrentMall() currentMall:any){
    console.log('currentUser',currentUser)
    console.log('currentMall',currentMall)
  }

  /**
   * @description: 返回可管理的商城列表，超级管理员全部，普通管理员它管理的，操作员和普通人都返回属于他的
   * @return {*}
   */  
  @Get('mall-list')
  async mallList(@CurrentUser() currentUser: UserEntity): Promise<MallEntity[]> {
    
    if(currentUser.isAdmin == isAdmin.SuperAdmin){
      return MallEntity.find();
    }else if (currentUser.isAdmin == isAdmin.Admin){
      return MallEntity.findBy({ userId : currentUser.id })
    }
    return MallEntity.findBy({ id: currentUser.mallId })
  }

  @Get('entry-mall/:mallId')
  async entryMall(@Param("mallId") mallId: string,
    @CurrentUser() currentUser:UserEntity): Promise<string> {
    // TODO:判断当前人是否有权限进入这个商城
    const payload = new JwtPayload(currentUser.id, mallId);
    return await this.jwtService.signAsync(payload.toJSON());
  }

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

  @Post('setPassword/:id')
  @UseInterceptors(new CoreActionLogInterceptor())
  async setPassword(@Param('id') id:string, @Body("password") password:string): Promise<void>{
    return this.service.setPassword(id, password);
  }

}