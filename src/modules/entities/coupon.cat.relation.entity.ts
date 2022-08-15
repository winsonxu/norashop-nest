import { BaseEntity, Column, Entity } from "typeorm";

@Entity("t_coupon_cat_relation", { schema: "norait_shop" })
export class CouponCatRelationEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "coupon_id", comment: "优惠券" })
  couponId: string;

  @Column("bigint", { name: "cat_id", comment: "分类" })
  catId: string;

  @Column("tinyint", {
    name: "is_delete",
    comment: "删除",
    width: 1,
    default: () => "'0'",
  })
  isDelete: boolean;

  constructor(init?: Partial<CouponCatRelationEntity>) {
    super();
    Object.assign(this, init);
  }
}
