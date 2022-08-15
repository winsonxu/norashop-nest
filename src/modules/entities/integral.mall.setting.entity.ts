import { BaseEntity, Column, Entity } from "typeorm";

@Entity("t_integral_mall_setting", { schema: "norait_shop" })
export class IntegralMallSettingEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("int", { name: "is_share", default: () => "'0'" })
  isShare: number;

  @Column("int", { name: "is_sms", default: () => "'0'" })
  isSms: number;

  @Column("int", { name: "is_mail", default: () => "'0'" })
  isMail: number;

  @Column("int", { name: "is_print", default: () => "'0'" })
  isPrint: number;

  @Column("int", { name: "is_territorial_limitation", default: () => "'0'" })
  isTerritorialLimitation: number;

  @Column("text", { name: "desc", comment: "积分说明" })
  desc: string;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  updatedAt: Date;

  @Column("longtext", { name: "payment_type", comment: "支付方式" })
  paymentType: string;

  @Column("longtext", { name: "send_type", comment: "发货方式" })
  sendType: string;

  @Column("longtext", { name: "goods_poster", comment: "自定义海报" })
  goodsPoster: string;

  constructor(init?: Partial<IntegralMallSettingEntity>) {
    super();
    Object.assign(this, init);
  }
}
