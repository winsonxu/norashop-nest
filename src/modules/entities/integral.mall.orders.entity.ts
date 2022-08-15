import { BaseEntity, Column, Entity } from "typeorm";

@Entity("t_integral_mall_orders", { schema: "norait_shop" })
export class IntegralMallOrdersEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("bigint", { name: "order_id" })
  orderId: string;

  @Column("varchar", { name: "token", length: 255 })
  token: string;

  @Column("int", { name: "integral_num", comment: "商品所需积分" })
  integralNum: number;

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

  constructor(init?: Partial<IntegralMallOrdersEntity>) {
    super();
    Object.assign(this, init);
  }
}
