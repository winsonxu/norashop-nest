import { BaseEntity, Column, Entity, Index } from "typeorm";

@Index("user_id", ["userId"], {})
@Index("is_delete", ["isDelete"], {})
@Entity("t_favorite", { schema: "norait_shop" })
export class FavoriteEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id", default: () => "'0'" })
  mallId: string;

  @Column("bigint", { name: "user_id", default: () => "'0'" })
  userId: string;

  @Column("bigint", { name: "goods_id", default: () => "'0'" })
  goodsId: string;

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

  @Column("bigint", {
    name: "favorite_mch_id",
    nullable: true,
    comment: "商户ID",
    default: () => "'0'",
  })
  favoriteMchId: string | null;

  constructor(init?: Partial<FavoriteEntity>) {
    super();
    Object.assign(this, init);
  }
}
