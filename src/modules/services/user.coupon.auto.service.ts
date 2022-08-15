/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-15 12:10:20
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-15 12:14:21
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserCouponAutoEntity } from "../entities/user.coupon.auto.entity";
import { BaseService } from "./base.service";

@Injectable()
export class UserCouponAutoService extends BaseService<UserCouponAutoEntity>{
  constructor(@InjectRepository(UserCouponAutoEntity) repo:Repository<UserCouponAutoEntity>){
      super(repo);
  }
}
