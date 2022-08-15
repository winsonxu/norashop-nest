import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("t_coupon_member_relation", { schema: "norait_shop" })
export class CouponMemberRelationEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

  @Column("int", { name: "coupon_id", comment: "优惠券id" })
  couponId: number;

  @Column("int", { name: "member_level", comment: "会员id" })
  memberLevel: number;

  @Column("tinyint", {
    name: "is_delete",
    comment: "删除",
    width: 1,
    default: () => "'0'",
  })
  isDelete: boolean;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "deleted_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  deletedAt: Date;
}
