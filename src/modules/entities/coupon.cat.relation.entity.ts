import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("t_coupon_cat_relation", { schema: "norait_shop" })
export class CouponCatRelationEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "coupon_id", comment: "优惠券" })
  couponId: number;

  @Column("int", { name: "cat_id", comment: "分类" })
  catId: number;

  @Column("tinyint", {
    name: "is_delete",
    comment: "删除",
    width: 1,
    default: () => "'0'",
  })
  isDelete: boolean;
}
