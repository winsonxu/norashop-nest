import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("t_integral_mall_orders", { schema: "norait_shop" })
export class IntegralMallOrdersEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

  @Column("int", { name: "order_id" })
  orderId: number;

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
}
