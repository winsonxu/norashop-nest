import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("t_user_coupon_member", { schema: "norait_shop" })
export class UserCouponMemberEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("int", {
    name: "member_level",
    comment: "会员等级",
    default: () => "'0'",
  })
  memberLevel: number;

  @Column("int", { name: "user_coupon_id" })
  userCouponId: number;

  @Column("int", { name: "is_delete" })
  isDelete: number;
}
