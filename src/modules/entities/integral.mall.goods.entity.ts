import { BaseEntity, Column, Entity } from "typeorm";

@Entity("t_integral_mall_goods", { schema: "norait_shop" })
export class IntegralMallGoodsEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "goods_id" })
  goodsId: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

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

  constructor(init?: Partial<IntegralMallGoodsEntity>) {
    super();
    Object.assign(this, init);
  }
}
