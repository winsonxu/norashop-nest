import { BaseEntity, Column, Entity } from "typeorm";

@Entity("t_user_coupon_member", { schema: "norait_shop" })
export class UserCouponMemberEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("bigint", { name: "user_id" })
  userId: string;

  @Column("int", {
    name: "member_level",
    comment: "会员等级",
    default: () => "'0'",
  })
  memberLevel: number;

  @Column("bigint", { name: "user_coupon_id" })
  userCouponId: string;

  @Column("int", { name: "is_delete" })
  isDelete: number;

  constructor(init?: Partial<UserCouponMemberEntity>) {
    super();
    Object.assign(this, init);
  }
}
