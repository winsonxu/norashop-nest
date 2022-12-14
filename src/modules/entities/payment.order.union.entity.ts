import { BaseEntity, Column, Entity, Index } from "typeorm";

@Index("mall_id", ["mallId"], {})
@Index("user_id", ["userId"], {})
@Index("order_no", ["orderNo"], {})
@Index("is_pay", ["isPay"], {})
@Index("pay_type", ["payType"], {})
@Entity("t_payment_order_union", { schema: "norait_shop" })
export class PaymentOrderUnionEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("bigint", { name: "user_id", default: () => "'0'" })
  userId: string;

  @Column("varchar", { name: "order_no", length: 32 })
  orderNo: string;

  @Column("decimal", { name: "amount", precision: 9, scale: 2 })
  amount: string;

  @Column("int", {
    name: "is_pay",
    comment: "支付状态：0=未支付，1=已支付",
    default: () => "'0'",
  })
  isPay: number;

  @Column("int", {
    name: "pay_type",
    comment: "支付方式：1=微信支付，2=货到付款，3=余额支付，4=支付宝支付",
    default: () => "'0'",
  })
  payType: number;

  @Column("varchar", { name: "title", length: 128 })
  title: string;

  @Column("text", {
    name: "support_pay_types",
    nullable: true,
    comment: "支持的支付方式（JSON）",
  })
  supportPayTypes: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("varchar", {
    name: "app_version",
    comment: "小程序端版本",
    length: 32,
  })
  appVersion: string;

  @Column("varchar", { name: "platform", length: 32 })
  platform: string;

  constructor(init?: Partial<PaymentOrderUnionEntity>) {
    super();
    Object.assign(this, init);
  }
}
