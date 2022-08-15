import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("cat_id", ["catId"], {})
@Index("goods_warehouse_id", ["goodsWarehouseId"], {})
@Entity("t_goods_cat_relation", { schema: "norait_shop" })
export class GoodsCatRelationEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "goods_warehouse_id" })
  goodsWarehouseId: number;

  @Column("int", { name: "cat_id" })
  catId: number;

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;
}
