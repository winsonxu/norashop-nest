import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("is_delete", ["isDelete"], {})
@Index("user_id", ["userId"], {})
@Entity("t_favorite", { schema: "norait_shop" })
export class FavoriteEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "mall_id", default: () => "'0'" })
  mallId: number;

  @Column("int", { name: "user_id", default: () => "'0'" })
  userId: number;

  @Column("int", { name: "goods_id", default: () => "'0'" })
  goodsId: number;

  @Column("decimal", {
    name: "mirror_price",
    comment: "收藏时的售价",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  mirrorPrice: string;

  @Column("timestamp", {
    name: "created_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  createdAt: Date;

  @Column("int", { name: "is_delete", default: () => "'0'" })
  isDelete: number;

  @Column("timestamp", {
    name: "deleted_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  deletedAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  updatedAt: Date;

  @Column("int", {
    name: "favorite_mch_id",
    nullable: true,
    comment: "商户ID",
    default: () => "'0'",
  })
  favoriteMchId: number | null;
}
