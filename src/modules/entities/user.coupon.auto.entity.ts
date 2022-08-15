/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-15 12:07:53
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-15 12:14:13
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Column, Entity, Index } from "typeorm";
import { BaseEntity } from "./base.entity";

@Index("auto_coupon_id", ["autoCouponId"], {})
@Index("user_coupon_id", ["userCouponId"], {})
@Entity("t_user_coupon_auto", { schema: "norait_shop" })
export class UserCouponAutoEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "user_coupon_id" })
  userCouponId: string;

  @Column("bigint", { name: "auto_coupon_id" })
  autoCouponId: string;

  @Column("tinyint", {
    name: "is_delete",
    comment: "删除",
    width: 1,
    default: () => "'0'",
  })
  isDelete: boolean;

  constructor(init?: Partial<UserCouponAutoEntity>) {
    super();
    Object.assign(this, init);
  }
}
