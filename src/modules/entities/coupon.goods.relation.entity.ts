import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("t_coupon_goods_relation", { schema: "norait_shop" })
export class CouponGoodsRelationEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "coupon_id", comment: "优惠券" })
  couponId: number;

  @Column("int", { name: "goods_warehouse_id", comment: "商品" })
  goodsWarehouseId: number;

  @Column("tinyint", {
    name: "is_delete",
    comment: "删除",
    width: 1,
    default: () => "'0'",
  })
  isDelete: boolean;
}
