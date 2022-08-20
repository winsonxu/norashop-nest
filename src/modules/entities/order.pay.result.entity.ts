import { BaseEntity, Column, Entity, Index } from "typeorm";

@Index("order_id", ["orderId"], {})
@Entity("t_order_pay_result", { schema: "norait_shop" })
export class OrderPayResultEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "order_id" })
  orderId: string;

  @Column("longtext", { name: "data", nullable: true, comment: "json数据" })
  data: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  constructor(init?: Partial<OrderPayResultEntity>) {
    super();
    Object.assign(this, init);
  }
}
