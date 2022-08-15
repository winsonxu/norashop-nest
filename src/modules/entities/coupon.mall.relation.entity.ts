import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("mall_id", ["mallId"], {})
@Index("user_coupon_id", ["userCouponId"], {})
@Entity("t_coupon_mall_relation", { schema: "norait_shop" })
export class CouponMallRelationEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

  @Column("int", { name: "user_coupon_id" })
  userCouponId: number;

  @Column("tinyint", {
    name: "is_delete",
    comment: "删除",
    width: 1,
    default: () => "'0'",
  })
  isDelete: boolean;

  @Column("int", { name: "order_id", comment: "订单id" })
  orderId: number;

  @Column("varchar", {
    name: "type",
    comment: " use优惠券自动发放",
    length: 20,
  })
  type: string;
}
