/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-20 19:15:53
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-20 19:20:12
 * @Description: 员工操作日志
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Injectable } from "@nestjs/common";
import { CoreActionLogEntity } from "../entities/core.action.log.entity";
import { MallEntity } from "../entities/mall.entity";
import { UserEntity } from "../entities/user.entity";

@Injectable()
export class CoreActionLogService {
  create(entity: CoreActionLogEntity, currentUser: UserEntity, currentMall: MallEntity){
    entity.userId = currentUser.id;
    entity.mallId = currentMall.id;
    entity.save();
  }
}