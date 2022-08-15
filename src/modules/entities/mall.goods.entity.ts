import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index1", ["goodsId"], {})
@Index("mall_id", ["mallId"], {})
@Entity("t_mall_goods", { schema: "norait_shop" })
export class MallGoodsEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

  @Column("int", { name: "goods_id" })
  goodsId: number;

  @Column("tinyint", {
    name: "is_quick_shop",
    comment: "是否快速购买",
    width: 1,
    default: () => "'0'",
  })
  isQuickShop: boolean;

  @Column("tinyint", {
    name: "is_sell_well",
    comment: "是否热销",
    width: 1,
    default: () => "'0'",
  })
  isSellWell: boolean;

  @Column("tinyint", {
    name: "is_negotiable",
    comment: "是否面议商品",
    width: 1,
    default: () => "'0'",
  })
  isNegotiable: boolean;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;
}
