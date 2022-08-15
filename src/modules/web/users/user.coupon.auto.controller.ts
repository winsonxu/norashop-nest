/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-15 12:14:41
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-15 12:16:53
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Controller, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Crud, CrudController } from "@nestjsx/crud";
import { UserCouponAutoEntity } from "src/modules/entities/user.coupon.auto.entity";
import { UserCouponAutoService } from "src/modules/services/user.coupon.auto.service";

@Crud({
  model: {
    type: UserCouponAutoEntity,
  },
})
@Controller('web/user-coupon-auto')
@UseGuards(AuthGuard('jwt'))
export class UserCouponAutoController implements CrudController<UserCouponAutoEntity>  {
  constructor(public readonly service: UserCouponAutoService){}
}