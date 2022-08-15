import { BaseEntity, Column, Entity } from "typeorm";

@Entity("t_order_clerk", { schema: "norait_shop" })
export class OrderClerkEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("tinyint", {
    name: "affirm_pay_type",
    comment: "确认收款类型|1.小程序收款|2.后台收款",
    width: 1,
    default: () => "'-1'",
  })
  affirmPayType: boolean;

  @Column("tinyint", {
    name: "clerk_type",
    comment: "确认核销类型|1.小程序核销|2.后台核销",
    width: 1,
    default: () => "'-1'",
  })
  clerkType: boolean;

  @Column("varchar", { name: "clerk_remark", comment: "核销备注", length: 255 })
  clerkRemark: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("bigint", { name: "order_id" })
  orderId: string;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  updatedAt: Date;

  @Column("timestamp", {
    name: "deleted_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  deletedAt: Date;

  @Column("tinyint", { name: "is_delete", default: () => "'0'" })
  isDelete: number;

  constructor(init?: Partial<OrderClerkEntity>) {
    super();
    Object.assign(this, init);
  }
}
