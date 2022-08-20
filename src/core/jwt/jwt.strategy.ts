/*
 * @Author: 2022-8-11 17:31:51
 * @Date: winsonxu
 * Copyright (c) 2016-2022 norait
 */

import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, VerifiedCallback } from "passport-jwt";
import { BusinessException } from "src/core/exception/business.exception";
import { MallEntity } from "src/modules/entities/mall.entity";
import { UserEntity } from "src/modules/entities/user.entity";
import { UserService } from "src/modules/services/user.service";
import { JwtConstants } from "./jwt.constants";
import { JwtPayload } from "./jwt.payload";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService){
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JwtConstants.secret
    })
  }
  async validate(payload: JwtPayload, done: VerifiedCallback): Promise<{user:UserEntity|null, mall: MallEntity|null} | null>{
    console.log('payload', payload);
    const user = await UserEntity.findOne({where:{id: payload.userId}});
    const mall = payload.mallId ? await MallEntity.findOne({where:{id: payload.mallId}}) : null;
    return {user , mall};
  }
}