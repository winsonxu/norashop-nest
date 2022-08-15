import { BaseEntity, Column, Entity } from "typeorm";

@Entity("t_goods_card_clerk_log", { schema: "norait_shop" })
export class GoodsCardClerkLogEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "user_card_id", comment: "用户卡券ID" })
  userCardId: string;

  @Column("bigint", { name: "clerk_id", comment: "核销员ID" })
  clerkId: string;

  @Column("bigint", { name: "store_id", comment: "核销门店ID" })
  storeId: string;

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

  constructor(init?: Partial<GoodsCardClerkLogEntity>) {
    super();
    Object.assign(this, init);
  }
}
