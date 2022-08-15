import { BaseEntity, Column, Entity } from "typeorm";

@Entity("t_coupon_goods_relation", { schema: "norait_shop" })
export class CouponGoodsRelationEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "coupon_id", comment: "优惠券" })
  couponId: string;

  @Column("bigint", { name: "goods_warehouse_id", comment: "商品" })
  goodsWarehouseId: string;

  @Column("tinyint", {
    name: "is_delete",
    comment: "删除",
    width: 1,
    default: () => "'0'",
  })
  isDelete: boolean;

  constructor(init?: Partial<CouponGoodsRelationEntity>) {
    super();
    Object.assign(this, init);
  }
}
