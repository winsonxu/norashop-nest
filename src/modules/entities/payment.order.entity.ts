import { Column, Entity, Index } from "typeorm";
import { BaseEntity } from "./base.entity";

@Index("is_pay", ["isPay"], {})
@Index("order_no", ["orderNo"], {})
@Index("pay_type", ["payType"], {})
@Index("payment_order_union_id", ["paymentOrderUnionId"], {})
@Entity("t_payment_order", { schema: "norait_shop" })
export class PaymentOrderEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "payment_order_union_id" })
  paymentOrderUnionId: string;

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

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("varchar", { name: "notify_class", length: 512 })
  notifyClass: string;

  @Column("decimal", {
    name: "refund",
    comment: "已退款金额",
    precision: 9,
    scale: 2,
    default: () => "'0.00'",
  })
  refund: string;

  constructor(init?: Partial<PaymentOrderEntity>) {
    super();
    Object.assign(this, init);
  }
}
