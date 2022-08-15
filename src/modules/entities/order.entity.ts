import { Column, Entity, Index } from "typeorm";
import { BaseEntity } from "./base.entity";

@Index("cancel_status", ["cancelStatus"], {})
@Index("clerk_id", ["clerkId"], {})
@Index("index1", ["mallId", "isPay", "payType", "cancelStatus", "isDelete"], {})
@Index("index2", ["mallId", "cancelStatus", "isDelete"], {})
@Index("index3", ["mallId", "isPay", "cancelStatus", "isDelete"], {})
@Index("index4", ["mallId", "payType", "cancelStatus", "isDelete"], {})
@Index("index5", ["mallId", "isPay", "payType", "cancelStatus", "isDelete"], {})
@Index("is_comment", ["isComment"], {})
@Index("is_confirm", ["isConfirm"], {})
@Index("is_delete", ["isDelete"], {})
@Index("is_pay", ["isPay"], {})
@Index("is_recycle", ["isRecycle"], {})
@Index("is_sale", ["isSale"], {})
@Index("is_send", ["isSend"], {})
@Index("mall_id", ["mallId"], {})
@Index("order_no", ["orderNo"], {})
@Index("sale_status", ["saleStatus"], {})
@Index("sign", ["sign"], {})
@Index("status", ["status"], {})
@Index("store_id", ["storeId"], {})
@Index("token", ["token"], {})
@Index("user_id", ["userId"], {})
@Entity("t_order", { schema: "norait_shop" })
export class OrderEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("bigint", { name: "user_id" })
  userId: string;

  @Column("bigint", {
    name: "mch_id",
    comment: "多商户id，0表示商城订单",
    default: () => "'0'",
  })
  mchId: string;

  @Column("varchar", { name: "order_no", comment: "订单号", length: 255 })
  orderNo: string;

  @Column("decimal", {
    name: "total_price",
    comment: "订单总金额(含运费)",
    precision: 10,
    scale: 2,
  })
  totalPrice: string;

  @Column("decimal", {
    name: "total_pay_price",
    comment: "实际支付总费用(含运费）",
    precision: 10,
    scale: 2,
  })
  totalPayPrice: string;

  @Column("decimal", {
    name: "express_original_price",
    comment: "运费(后台修改前)",
    precision: 10,
    scale: 2,
  })
  expressOriginalPrice: string;

  @Column("decimal", {
    name: "express_price",
    comment: "运费(后台修改后)",
    precision: 10,
    scale: 2,
  })
  expressPrice: string;

  @Column("decimal", {
    name: "total_goods_price",
    comment: "订单商品总金额(优惠后)",
    precision: 10,
    scale: 2,
  })
  totalGoodsPrice: string;

  @Column("decimal", {
    name: "total_goods_original_price",
    comment: "订单商品总金额(优惠前)",
    precision: 10,
    scale: 2,
  })
  totalGoodsOriginalPrice: string;

  @Column("decimal", {
    name: "member_discount_price",
    comment: "会员优惠价格(正数表示优惠，负数表示加价)",
    precision: 10,
    scale: 2,
  })
  memberDiscountPrice: string;

  @Column("decimal", {
    name: "full_reduce_price",
    comment: "满减活动优惠价格",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fullReducePrice: string;

  @Column("bigint", {
    name: "use_user_coupon_id",
    comment: "使用的用户优惠券id",
  })
  useUserCouponId: string;

  @Column("decimal", {
    name: "coupon_discount_price",
    comment: "优惠券优惠金额",
    precision: 10,
    scale: 2,
  })
  couponDiscountPrice: string;

  @Column("int", { name: "use_integral_num", comment: "使用积分数量" })
  useIntegralNum: number;

  @Column("decimal", {
    name: "integral_deduction_price",
    comment: "积分抵扣金额",
    precision: 10,
    scale: 2,
  })
  integralDeductionPrice: string;

  @Column("varchar", { name: "name", comment: "收件人姓名", length: 65 })
  name: string;

  @Column("varchar", { name: "mobile", comment: "收件人手机号", length: 255 })
  mobile: string;

  @Column("varchar", { name: "address", comment: "收件人地址", length: 255 })
  address: string;

  @Column("varchar", { name: "remark", comment: "用户订单备注", length: 255 })
  remark: string;

  @Column("longtext", {
    name: "order_form",
    nullable: true,
    comment: "自定义表单（JSON）",
  })
  orderForm: string | null;

  @Column("varchar", { name: "words", comment: "商家留言", length: 255 })
  words: string;

  @Column("varchar", {
    name: "seller_remark",
    comment: "商家订单备注",
    length: 255,
  })
  sellerRemark: string;

  @Column("tinyint", {
    name: "is_pay",
    comment: "是否支付：0.未支付|1.已支付",
    width: 1,
    default: () => "'0'",
  })
  isPay: boolean;

  @Column("tinyint", {
    name: "pay_type",
    comment: "支付方式：1.在线支付 2.货到付款 3.余额支付",
  })
  payType: number;

  @Column("timestamp", {
    name: "pay_time",
    comment: "支付时间",
    default: () => "'0000-00-00 00:00:00'",
  })
  payTime: Date;

  @Column("tinyint", {
    name: "is_send",
    comment: "是否发货：0.未发货|1.已发货",
    width: 1,
    default: () => "'0'",
  })
  isSend: boolean;

  @Column("timestamp", {
    name: "send_time",
    comment: "发货时间",
    default: () => "'0000-00-00 00:00:00'",
  })
  sendTime: Date;

  @Column("varchar", {
    name: "customer_name",
    nullable: true,
    comment: "京东商家编号",
    length: 65,
  })
  customerName: string | null;

  @Column("varchar", { name: "express", comment: "物流公司", length: 65 })
  express: string;

  @Column("varchar", { name: "express_no", comment: "物流订单号", length: 255 })
  expressNo: string;

  @Column("tinyint", {
    name: "is_sale",
    comment: "是否过售后时间",
    width: 1,
    default: () => "'0'",
  })
  isSale: boolean;

  @Column("tinyint", {
    name: "is_confirm",
    comment: "收货状态：0.未收货|1.已收货",
    width: 1,
    default: () => "'0'",
  })
  isConfirm: boolean;

  @Column("timestamp", {
    name: "confirm_time",
    comment: "确认收货时间",
    default: () => "'0000-00-00 00:00:00'",
  })
  confirmTime: Date;

  @Column("tinyint", {
    name: "cancel_status",
    comment: "订单取消状态：0.未取消|1.已取消|2.申请取消",
    width: 1,
    default: () => "'0'",
  })
  cancelStatus: boolean;

  @Column("timestamp", {
    name: "cancel_time",
    comment: "订单取消时间",
    default: () => "'0000-00-00 00:00:00'",
  })
  cancelTime: Date;

  @Column("timestamp", {
    name: "created_at",
    default: () => "'0000-00-00 00:00:00'",
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

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;

  @Column("tinyint", {
    name: "is_recycle",
    comment: "是否加入回收站 0.否|1.是",
    width: 1,
    default: () => "'0'",
  })
  isRecycle: boolean;

  @Column("tinyint", {
    name: "send_type",
    comment: "配送方式：0--快递配送 1--到店自提 2--同城配送 3--无配送",
    width: 1,
    default: () => "'0'",
  })
  sendType: boolean;

  @Column("varchar", { name: "offline_qrcode", comment: "核销码", length: 255 })
  offlineQrcode: string;

  @Column("bigint", {
    name: "clerk_id",
    comment: "核销员ID",
    default: () => "'0'",
  })
  clerkId: string;

  @Column("bigint", {
    name: "store_id",
    comment: "自提门店ID",
    default: () => "'0'",
  })
  storeId: string;

  @Column("varchar", {
    name: "sign",
    comment: "订单标识，用于区分插件",
    length: 255,
  })
  sign: string;

  @Column("varchar", { name: "token", length: 32 })
  token: string;

  @Column("longtext", {
    name: "support_pay_types",
    nullable: true,
    comment: "支持的支付方式，空表示支持系统设置支持的所有方式",
  })
  supportPayTypes: string | null;

  @Column("tinyint", {
    name: "is_comment",
    comment: "是否评价0.否|1.是",
    width: 1,
    default: () => "'0'",
  })
  isComment: boolean;

  @Column("timestamp", {
    name: "comment_time",
    default: () => "'0000-00-00 00:00:00'",
  })
  commentTime: Date;

  @Column("tinyint", {
    name: "sale_status",
    comment: "是否申请售后",
    width: 1,
    default: () => "'0'",
  })
  saleStatus: boolean;

  @Column("tinyint", {
    name: "status",
    comment: "订单状态|1.已完成|0.进行中不能对订单进行任何操作",
    width: 1,
    default: () => "'1'",
  })
  status: boolean;

  @Column("decimal", {
    name: "back_price",
    comment: "后台优惠(正数表示优惠，负数表示加价)",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  backPrice: string;

  @Column("timestamp", {
    name: "auto_cancel_time",
    nullable: true,
    comment: "自动取消时间",
  })
  autoCancelTime: Date | null;

  @Column("timestamp", {
    name: "auto_confirm_time",
    nullable: true,
    comment: "自动确认收货时间",
  })
  autoConfirmTime: Date | null;

  @Column("timestamp", {
    name: "auto_sales_time",
    nullable: true,
    comment: "自动售后时间",
  })
  autoSalesTime: Date | null;

  @Column("int", {
    name: "distance",
    nullable: true,
    comment: "同城配送距离，-1不在范围内，正数为距离KM",
    default: () => "'-1'",
  })
  distance: number | null;

  @Column("varchar", {
    name: "city_mobile",
    nullable: true,
    comment: "同城配送联系方式",
    length: 100,
  })
  cityMobile: string | null;

  @Column("varchar", { name: "location", nullable: true, length: 255 })
  location: string | null;

  @Column("varchar", { name: "city_name", nullable: true, length: 255 })
  cityName: string | null;

  @Column("varchar", { name: "city_info", nullable: true, length: 255 })
  cityInfo: string | null;

  @Column("text", {
    name: "cancel_data",
    nullable: true,
    comment: "订单申请退款数据",
  })
  cancelData: string | null;

  @Column("varchar", {
    name: "platform",
    comment: "wxapp 微信小程序",
    length: 32,
  })
  platform: string;

  @Column("int", {
    name: "new_status",
    comment:
      "状态字段（转成二进制查看）从右往左查看依次：是否中断交易、是否关闭\n00—未中断交易\n11—中断交易，已关闭\n10—已关闭",
    default: () => "'0'",
  })
  newStatus: number;

  constructor(init?: Partial<OrderEntity>) {
    super();
    Object.assign(this, init);
  }
}
