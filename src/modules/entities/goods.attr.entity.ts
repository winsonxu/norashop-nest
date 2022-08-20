import { BaseEntity, Column, Entity, Index } from "typeorm";

@Index("goods_id", ["goodsId"], {})
@Index("is_delete", ["isDelete"], {})
@Index("index1", ["isDelete", "goodsId"], {})
@Entity("t_goods_attr", { schema: "norait_shop" })
export class GoodsAttrEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "goods_id" })
  goodsId: string;

  @Column("varchar", { name: "sign_id", comment: "规格ID标识", length: 255 })
  signId: string;

  @Column("int", {
    name: "stock",
    comment: "库存",
    unsigned: true,
    default: () => "'0'",
  })
  stock: number;

  @Column("decimal", {
    name: "price",
    comment: "价格",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  price: string;

  @Column("varchar", { name: "no", comment: "货号", length: 255 })
  no: string;

  @Column("int", {
    name: "weight",
    comment: "重量（克）",
    default: () => "'0'",
  })
  weight: number;

  @Column("varchar", { name: "pic_url", comment: "规格图片", length: 255 })
  picUrl: string;

  @Column("varchar", { name: "bar_code", comment: "条形码", length: 255 })
  barCode: string;

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;

  @Column("decimal", {
    name: "cost_price",
    nullable: true,
    comment: "成本价",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  costPrice: string | null;

  constructor(init?: Partial<GoodsAttrEntity>) {
    super();
    Object.assign(this, init);
  }
}
