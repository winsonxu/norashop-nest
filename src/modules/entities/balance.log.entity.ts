import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("mall_id", ["mallId"], {})
@Index("type", ["type"], {})
@Index("user_id", ["userId"], {})
@Entity("t_balance_log", { schema: "norait_shop" })
export class BalanceLogEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

  @Column("int", { name: "user_id" })
  userId: number;

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
}
