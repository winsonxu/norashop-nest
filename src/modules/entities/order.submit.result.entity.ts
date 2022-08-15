import { BaseEntity, Column, Entity } from "typeorm";

@Entity("t_order_submit_result", { schema: "norait_shop" })
export class OrderSubmitResultEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("varchar", { name: "token", length: 32 })
  token: string;

  @Column("longtext", { name: "data", nullable: true })
  data: string | null;

  constructor(init?: Partial<OrderSubmitResultEntity>) {
    super();
    Object.assign(this, init);
  }
}
