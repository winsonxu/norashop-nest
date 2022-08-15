import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("t_integral_mall_goods", { schema: "norait_shop" })
export class IntegralMallGoodsEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "goods_id" })
  goodsId: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

  @Column("tinyint", {
    name: "is_home",
    comment: "放置首页0.否|1.是",
    width: 1,
    default: () => "'0'",
  })
  isHome: boolean;

  @Column("int", { name: "integral_num", default: () => "'0'" })
  integralNum: number;

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;
}
