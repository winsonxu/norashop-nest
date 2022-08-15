import { Column, Entity, Index } from "typeorm";
import { BaseEntity } from "./base.entity";

@Index("cat_id", ["catId"], {})
@Index("goods_warehouse_id", ["goodsWarehouseId"], {})
@Entity("t_goods_cat_relation", { schema: "norait_shop" })
export class GoodsCatRelationEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "goods_warehouse_id" })
  goodsWarehouseId: string;

  @Column("bigint", { name: "cat_id" })
  catId: string;

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;

  constructor(init?: Partial<GoodsCatRelationEntity>) {
    super();
    Object.assign(this, init);
  }
}
