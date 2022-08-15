import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("t_goods_card_clerk_log", { schema: "norait_shop" })
export class GoodsCardClerkLogEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_card_id", comment: "用户卡券ID" })
  userCardId: number;

  @Column("int", { name: "clerk_id", comment: "核销员ID" })
  clerkId: number;

  @Column("int", { name: "store_id", comment: "核销门店ID" })
  storeId: number;

  @Column("int", { name: "use_number", comment: "核销次数" })
  useNumber: number;

  @Column("int", { name: "surplus_number", comment: "剩余次数" })
  surplusNumber: number;

  @Column("timestamp", {
    name: "clerked_at",
    comment: "核销时间",
    default: () => "CURRENT_TIMESTAMP",
  })
  clerkedAt: Date;
}
