import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("is_delete", ["isDelete"], {})
@Index("user_id", ["userId"], {})
@Entity("t_footprint_goods_log", { schema: "norait_shop" })
export class FootprintGoodsLogEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "mall_id", default: () => "'0'" })
  mallId: number;

  @Column("int", { name: "user_id", default: () => "'0'" })
  userId: number;

  @Column("int", { name: "goods_id", default: () => "'0'" })
  goodsId: number;

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
}
