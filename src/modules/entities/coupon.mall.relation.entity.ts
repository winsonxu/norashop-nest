import { BaseEntity, Column, Entity, Index } from "typeorm";

@Index("mall_id", ["mallId"], {})
@Index("user_coupon_id", ["userCouponId"], {})
@Entity("t_coupon_mall_relation", { schema: "norait_shop" })
export class CouponMallRelationEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("bigint", { name: "user_coupon_id" })
  userCouponId: string;

  @Column("tinyint", {
    name: "is_delete",
    comment: "删除",
    width: 1,
    default: () => "'0'",
  })
  isDelete: boolean;

  @Column("bigint", { name: "order_id", comment: "订单id" })
  orderId: string;

  @Column("varchar", {
    name: "type",
    comment: " use优惠券自动发放",
    length: 20,
  })
  type: string;

  constructor(init?: Partial<CouponMallRelationEntity>) {
    super();
    Object.assign(this, init);
  }
}
