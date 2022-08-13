/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-12 13:56:33
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-13 09:44:06
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Body, Controller, Post } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Md5 } from "md5-typescript";
import { BusinessException } from "src/core/exception/business.exception";
import { JwtPayload } from "src/core/jwt/jwt.payload";
import { UserEntity } from "src/modules/entities/user.entity";
import { UserService } from "src/modules/services/user.service";

@Controller('web/auth')
export class AuthController {
  constructor(private readonly userService: UserService,
    private readonly jwtService: JwtService){}
  
    @Post('login')
    async login(@Body('username')username:string, @Body('password')password:string): Promise<string> {
      const user = await this.userService.getByAccount(username);
      if(user === null) throw new BusinessException(40001, '用户不存在');
      const md5password = Md5.init(password)
      console.log(password)
      console.log(md5password)
      
      if(user.password.toLocaleLowerCase() !== md5password.toLocaleLowerCase()) throw new BusinessException(40002, '密码不正确')
      const role:any[] = [] // TODO：这里需要获取角色权限列表
      const payload = new JwtPayload(user.username, user.id, role);
      const token:string = await this.jwtService.signAsync(payload.toJSON());
      return token;
    }
}