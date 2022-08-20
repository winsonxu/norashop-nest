import { BaseEntity, Column, Entity, Index } from "typeorm";

@Index("user_coupon_id", ["userCouponId"], {})
@Index("auto_coupon_id", ["autoCouponId"], {})
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
