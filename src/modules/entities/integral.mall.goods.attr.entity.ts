import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("goods_attr_id", ["goodsAttrId"], {})
@Index("goods_id", ["goodsId"], {})
@Entity("t_integral_mall_goods_attr", { schema: "norait_shop" })
export class IntegralMallGoodsAttrEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "integral_num",
    comment: "商品所需积分",
    default: () => "'0'",
  })
  integralNum: number;

  @Column("int", { name: "goods_id" })
  goodsId: number;

  @Column("int", { name: "goods_attr_id" })
  goodsAttrId: number;

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;
}
