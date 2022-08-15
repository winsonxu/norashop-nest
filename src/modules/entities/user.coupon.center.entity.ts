import { Column, Entity, Index } from "typeorm";
import { BaseEntity } from "./base.entity";

@Index("mall_id", ["mallId"], {})
@Index("user_coupon_id", ["userCouponId"], {})
@Index("user_id", ["userId"], {})
@Entity("t_user_coupon_center", { schema: "norait_shop" })
export class UserCouponCenterEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", {
    name: "mall_id",
    comment: "商城ID",
    default: () => "'0'",
  })
  mallId: string;

  @Column("bigint", {
    name: "user_coupon_id",
    comment: "优惠券ID",
    default: () => "'0'",
  })
  userCouponId: string;

  @Column("bigint", {
    name: "user_id",
    comment: "用户ID",
    default: () => "'0'",
  })
  userId: string;

  @Column("int", {
    name: "is_delete",
    comment: "是否删除 0--不删除 1--删除",
    default: () => "'0'",
  })
  isDelete: number;

  @Column("timestamp", {
    name: "created_at",
    comment: "创建时间",
    default: () => "'0000-00-00 00:00:00'",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    comment: "更新时间",
    default: () => "'0000-00-00 00:00:00'",
  })
  updatedAt: Date;

  @Column("timestamp", {
    name: "deleted_at",
    comment: "删除时间",
    default: () => "'0000-00-00 00:00:00'",
  })
  deletedAt: Date;

  constructor(init?: Partial<UserCouponCenterEntity>) {
    super();
    Object.assign(this, init);
  }
}
