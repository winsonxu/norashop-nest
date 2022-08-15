import { BaseEntity, Column, Entity } from "typeorm";

@Entity("t_coupon_member_relation", { schema: "norait_shop" })
export class CouponMemberRelationEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("bigint", { name: "coupon_id", comment: "优惠券id" })
  couponId: string;

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

  constructor(init?: Partial<CouponMemberRelationEntity>) {
    super();
    Object.assign(this, init);
  }
}
