import { Column, Entity, Index } from "typeorm";
import { BaseEntity } from "./base.entity";

@Index("is_delete", ["isDelete"], {})
@Index("user_id", ["userId"], {})
@Entity("t_footprint_goods_log", { schema: "norait_shop" })
export class FootprintGoodsLogEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id", default: () => "'0'" })
  mallId: string;

  @Column("bigint", { name: "user_id", default: () => "'0'" })
  userId: string;

  @Column("bigint", { name: "goods_id", default: () => "'0'" })
  goodsId: string;

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

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;

  constructor(init?: Partial<FootprintGoodsLogEntity>) {
    super();
    Object.assign(this, init);
  }
}
