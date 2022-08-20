import { BaseEntity, Column, Entity, Index } from "typeorm";

@Index("mall_id", ["mallId"], {})
@Index("user_id", ["userId"], {})
@Index("type", ["type"], {})
@Entity("t_balance_log", { schema: "norait_shop" })
export class BalanceLogEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("bigint", { name: "user_id" })
  userId: string;

  @Column("tinyint", {
    name: "type",
    comment: "类型：1=收入，2=支出",
    width: 1,
  })
  type: boolean;

  @Column("decimal", {
    name: "money",
    comment: "变动金额",
    precision: 10,
    scale: 2,
  })
  money: string;

  @Column("varchar", { name: "desc", comment: "变动说明", length: 255 })
  desc: string;

  @Column("longtext", { name: "custom_desc", comment: "自定义详细说明|记录" })
  customDesc: string;

  @Column("varchar", { name: "order_no", comment: "订单号", length: 255 })
  orderNo: string;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  constructor(init?: Partial<BalanceLogEntity>) {
    super();
    Object.assign(this, init);
  }
}
