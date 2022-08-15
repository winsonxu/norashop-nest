import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("created_at", ["createdAt"], {})
@Index("goods_warehouse_id", ["goodsWarehouseId"], {})
@Index(
  "index1",
  ["mallId", "goodsWarehouseId", "status", "sign", "isDelete"],
  {}
)
@Index("index2", ["mallId", "status", "isDelete"], {})
@Index("is_delete", ["isDelete"], {})
@Index("mall_id", ["mallId"], {})
@Index("sales", ["sales"], {})
@Index("sign", ["sign"], {})
@Index("sort", ["sort"], {})
@Index("status", ["status"], {})
@Entity("t_goods", { schema: "norait_shop" })
export class GoodsEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

  @Column("int", { name: "mch_id", default: () => "'0'" })
  mchId: number;

  @Column("int", { name: "goods_warehouse_id" })
  goodsWarehouseId: number;

  @Column("smallint", {
    name: "status",
    comment: "上架状态：0=下架，1=上架",
    default: () => "'0'",
  })
  status: number;

  @Column("decimal", {
    name: "price",
    comment: "售价",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  price: string;

  @Column("smallint", {
    name: "use_attr",
    comment: "是否使用规格：0=不使用，1=使用",
    default: () => "'1'",
  })
  useAttr: number;

  @Column("text", { name: "attr_groups", comment: "商品规格组" })
  attrGroups: string;

  @Column("int", {
    name: "goods_stock",
    comment: "商品库存",
    default: () => "'0'",
  })
  goodsStock: number;

  @Column("int", {
    name: "virtual_sales",
    comment: "已出售量",
    default: () => "'0'",
  })
  virtualSales: number;

  @Column("int", {
    name: "confine_count",
    comment: "购物数量限制",
    default: () => "'-1'",
  })
  confineCount: number;

  @Column("int", {
    name: "pieces",
    comment: "单品满件包邮",
    default: () => "'0'",
  })
  pieces: number;

  @Column("decimal", {
    name: "forehead",
    comment: "单口满额包邮",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  forehead: string;

  @Column("int", {
    name: "shipping_id",
    comment: "包邮模板ID",
    default: () => "'0'",
  })
  shippingId: number;

  @Column("int", { name: "freight_id", comment: "运费模板ID" })
  freightId: number;

  @Column("int", {
    name: "give_integral",
    comment: "赠送积分",
    default: () => "'0'",
  })
  giveIntegral: number;

  @Column("tinyint", {
    name: "give_integral_type",
    comment: "赠送积分类型1.固定值 |2.百分比",
    width: 1,
    default: () => "'1'",
  })
  giveIntegralType: boolean;

  @Column("decimal", {
    name: "give_balance",
    comment: "赠送余额",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  giveBalance: string;

  @Column("tinyint", {
    name: "give_balance_type",
    comment: "赠送余额类型1.固定值 |2.百分比",
    width: 1,
    default: () => "'1'",
  })
  giveBalanceType: boolean;

  @Column("decimal", {
    name: "forehead_integral",
    comment: "可抵扣积分",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  foreheadIntegral: string;

  @Column("tinyint", {
    name: "forehead_integral_type",
    comment: "可抵扣积分类型1.固定值 |2.百分比",
    width: 1,
    default: () => "'1'",
  })
  foreheadIntegralType: boolean;

  @Column("tinyint", {
    name: "accumulative",
    comment: "允许多件累计折扣",
    width: 1,
    default: () => "'0'",
  })
  accumulative: boolean;

  @Column("smallint", {
    name: "individual_share",
    comment: "是否单独分销设置：0=否，1=是",
    default: () => "'0'",
  })
  individualShare: number;

  @Column("tinyint", {
    name: "attr_setting_type",
    comment: "分销设置类型 0.普通设置|1.详细设置",
    width: 1,
    default: () => "'0'",
  })
  attrSettingType: boolean;

  @Column("tinyint", {
    name: "is_level",
    comment: "是否享受会员价购买",
    width: 1,
    default: () => "'0'",
  })
  isLevel: boolean;

  @Column("tinyint", {
    name: "is_level_alone",
    comment: "是否单独设置会员价",
    width: 1,
    default: () => "'0'",
  })
  isLevelAlone: boolean;

  @Column("tinyint", {
    name: "share_type",
    comment: "佣金配比 0--固定金额 1--百分比",
    width: 1,
    default: () => "'0'",
  })
  shareType: boolean;

  @Column("varchar", {
    name: "sign",
    comment: "商品标示用于区分商品属于什么模块",
    length: 255,
  })
  sign: string;

  @Column("varchar", {
    name: "app_share_pic",
    comment: "自定义分享图片",
    length: 255,
  })
  appSharePic: string;

  @Column("varchar", {
    name: "app_share_title",
    comment: "自定义分享标题",
    length: 65,
  })
  appShareTitle: string;

  @Column("tinyint", {
    name: "is_default_services",
    comment: "默认服务 0.否|1.是",
    width: 1,
    default: () => "'1'",
  })
  isDefaultServices: boolean;

  @Column("int", { name: "sort", comment: "排序", default: () => "'100'" })
  sort: number;

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

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;

  @Column("int", {
    name: "payment_people",
    comment: "支付人数",
    default: () => "'0'",
  })
  paymentPeople: number;

  @Column("int", {
    name: "payment_num",
    comment: "支付件数",
    default: () => "'0'",
  })
  paymentNum: number;

  @Column("decimal", {
    name: "payment_amount",
    comment: "支付金额",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  paymentAmount: string;

  @Column("int", {
    name: "payment_order",
    comment: "支付订单数",
    default: () => "'0'",
  })
  paymentOrder: number;

  @Column("int", { name: "confine_order_count", default: () => "'-1'" })
  confineOrderCount: number;

  @Column("tinyint", {
    name: "is_area_limit",
    comment: "是否单独区域购买",
    width: 1,
    default: () => "'0'",
  })
  isAreaLimit: boolean;

  @Column("longtext", {
    name: "area_limit",
    nullable: true,
    comment: "区域限制",
  })
  areaLimit: string | null;

  @Column("int", {
    name: "form_id",
    comment: "自定义表单id 0--表示默认表单 -1--表示不使用表单",
    default: () => "'0'",
  })
  formId: number;

  @Column("int", {
    name: "sales",
    comment: "商品实际销量",
    default: () => "'0'",
  })
  sales: number;

  @Column("int", {
    name: "detail_count",
    comment: "详情浏览量统计",
    default: () => "'0'",
  })
  detailCount: number;

  @Column("varchar", {
    name: "guarantee_title",
    comment: "商品服务标题",
    length: 64,
  })
  guaranteeTitle: string;

  @Column("varchar", {
    name: "guarantee_pic",
    comment: "商品服务标识",
    length: 2048,
  })
  guaranteePic: string;

  @Column("varchar", { name: "param_name", comment: "参数名称", length: 255 })
  paramName: string;

  @Column("longtext", {
    name: "param_content",
    nullable: true,
    comment: "参数内容",
  })
  paramContent: string | null;

  @Column("smallint", {
    name: "limit_buy_status",
    comment: "限购状态0--关闭 1--开启",
    default: () => "'1'",
  })
  limitBuyStatus: number;

  @Column("varchar", {
    name: "limit_buy_type",
    comment: "限购类型 day--每天 week--每周 month--每月 all--永久",
    length: 50,
    default: () => "'day'",
  })
  limitBuyType: string;

  @Column("int", {
    name: "limit_buy_value",
    comment: "限购数量",
    default: () => "'-1'",
  })
  limitBuyValue: number;

  @Column("int", {
    name: "min_number",
    comment: "起售数量",
    default: () => "'1'",
  })
  minNumber: number;

  @Column("smallint", {
    name: "is_setting_show_and_buy_auth",
    comment: "是否单独设置浏览和购买权限",
    default: () => "'0'",
  })
  isSettingShowAndBuyAuth: number;

  @Column("varchar", {
    name: "show_goods_auth",
    comment: "会员等级浏览权限",
    length: 255,
    default: () => "'-1'",
  })
  showGoodsAuth: string;

  @Column("varchar", {
    name: "buy_goods_auth",
    comment: "会员等级购买权限",
    length: 255,
    default: () => "'-1'",
  })
  buyGoodsAuth: string;

  @Column("smallint", {
    name: "is_setting_send_type",
    comment: "是否单独设置发货方式0--否 1--是",
    default: () => "'0'",
  })
  isSettingSendType: number;

  @Column("varchar", { name: "send_type", comment: "发货方式", length: 255 })
  sendType: string;

  @Column("smallint", {
    name: "is_time",
    comment: "是否单独设置销售时间",
    default: () => "'0'",
  })
  isTime: number;

  @Column("timestamp", {
    name: "sell_begin_time",
    comment: "开售时间",
    default: () => "'0000-00-00 00:00:00'",
  })
  sellBeginTime: Date;

  @Column("timestamp", {
    name: "sell_end_time",
    comment: "结束时间",
    default: () => "'0000-00-00 00:00:00'",
  })
  sellEndTime: Date;

  @Column("int", {
    name: "limit_buy_order",
    comment: "单笔订单可购买数量",
    default: () => "'-1'",
  })
  limitBuyOrder: number;

  @Column("tinyint", {
    name: "is_shipping",
    comment: "是否包邮0--不包邮 1--包邮",
    width: 1,
    default: () => "'1'",
  })
  isShipping: boolean;

  @Column("tinyint", {
    name: "is_share",
    comment: "是否允许分销0--不允许 1--允许",
    width: 1,
    default: () => "'1'",
  })
  isShare: boolean;
}
