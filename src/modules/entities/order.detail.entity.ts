import { Column, Entity, Index } from "typeorm";
import { BaseEntity } from "./base.entity";

@Index("created_at", ["createdAt"], {})
@Index("index1", ["orderId", "goodsId", "isRefund"], {})
@Index("order_id", ["orderId"], {})
@Entity("t_order_detail", { schema: "norait_shop" })
export class OrderDetailEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "order_id" })
  orderId: string;

  @Column("bigint", { name: "goods_id" })
  goodsId: string;

  @Column("int", { name: "num", comment: "购买商品数量" })
  num: number;

  @Column("decimal", {
    name: "unit_price",
    comment: "商品单价",
    precision: 10,
    scale: 2,
  })
  unitPrice: string;

  @Column("decimal", {
    name: "total_original_price",
    comment: "商品原总价(优惠前)",
    precision: 10,
    scale: 2,
  })
  totalOriginalPrice: string;

  @Column("decimal", {
    name: "total_price",
    comment: "商品总价(优惠后)",
    precision: 10,
    scale: 2,
  })
  totalPrice: string;

  @Column("decimal", {
    name: "member_discount_price",
    comment: "会员优惠金额(正数表示优惠，负数表示加价)",
    precision: 10,
    scale: 2,
  })
  memberDiscountPrice: string;

  @Column("decimal", {
    name: "erase_price",
    comment: "抹零价格",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  erasePrice: string;

  @Column("longtext", { name: "goods_info", comment: "购买商品信息" })
  goodsInfo: string;

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;

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

  @Column("timestamp", {
    name: "deleted_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  deletedAt: Date;

  @Column("tinyint", {
    name: "is_refund",
    comment: "是否退款",
    width: 1,
    default: () => "'0'",
  })
  isRefund: boolean;

  @Column("tinyint", {
    name: "refund_status",
    comment: "售后状态 0--未售后 1--售后中 2--售后结束",
    width: 1,
    default: () => "'0'",
  })
  refundStatus: boolean;

  @Column("decimal", {
    name: "back_price",
    comment: "后台优惠(正数表示优惠，负数表示加价)",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  backPrice: string;

  @Column("varchar", {
    name: "sign",
    comment: "订单详情标识，用于区分插件",
    length: 255,
  })
  sign: string;

  @Column("varchar", { name: "goods_no", comment: "商品货号", length: 60 })
  goodsNo: string;

  @Column("longtext", {
    name: "form_data",
    nullable: true,
    comment: "自定义表单提交的数据",
  })
  formData: string | null;

  @Column("bigint", {
    name: "form_id",
    nullable: true,
    comment: "自定义表单的id",
    default: () => "'0'",
  })
  formId: string | null;

  @Column("varchar", {
    name: "goods_type",
    comment: "商品类型",
    length: 255,
    default: () => "'goods'",
  })
  goodsType: string;

  constructor(init?: Partial<OrderDetailEntity>) {
    super();
    Object.assign(this, init);
  }
}
