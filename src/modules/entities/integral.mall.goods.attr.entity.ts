import { Column, Entity, Index } from "typeorm";
import { BaseEntity } from "./base.entity";

@Index("goods_attr_id", ["goodsAttrId"], {})
@Index("goods_id", ["goodsId"], {})
@Entity("t_integral_mall_goods_attr", { schema: "norait_shop" })
export class IntegralMallGoodsAttrEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("int", {
    name: "integral_num",
    comment: "商品所需积分",
    default: () => "'0'",
  })
  integralNum: number;

  @Column("bigint", { name: "goods_id" })
  goodsId: string;

  @Column("bigint", { name: "goods_attr_id" })
  goodsAttrId: string;

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;

  constructor(init?: Partial<IntegralMallGoodsAttrEntity>) {
    super();
    Object.assign(this, init);
  }
}
