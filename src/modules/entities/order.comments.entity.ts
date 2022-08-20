import { BaseEntity, Column, Entity, Index } from "typeorm";

@Index("order_id", ["orderId"], {})
@Entity("t_order_comments", { schema: "norait_shop" })
export class OrderCommentsEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("bigint", { name: "mch_id", default: () => "'0'" })
  mchId: string;

  @Column("bigint", { name: "order_id" })
  orderId: string;

  @Column("bigint", { name: "order_detail_id" })
  orderDetailId: string;

  @Column("bigint", { name: "user_id" })
  userId: string;

  @Column("tinyint", { name: "score", comment: "评分：1=差评，2=中评，3=好" })
  score: number;

  @Column("text", { name: "content", comment: "评价内容" })
  content: string;

  @Column("text", { name: "pic_url", comment: "评价图片" })
  picUrl: string;

  @Column("tinyint", {
    name: "is_show",
    comment: "是否显示：0.不显示|1.显示",
    width: 1,
    default: () => "'1'",
  })
  isShow: boolean;

  @Column("tinyint", {
    name: "is_virtual",
    comment: "是否虚拟用户",
    width: 1,
    default: () => "'0'",
  })
  isVirtual: boolean;

  @Column("varchar", {
    name: "virtual_user",
    comment: "虚拟用户名",
    length: 255,
  })
  virtualUser: string;

  @Column("varchar", {
    name: "virtual_avatar",
    comment: "虚拟头像",
    length: 255,
  })
  virtualAvatar: string;

  @Column("timestamp", {
    name: "virtual_time",
    comment: "虚拟评价时间",
    default: () => "'0000-00-00 00:00:00'",
  })
  virtualTime: Date;

  @Column("bigint", {
    name: "goods_id",
    comment: "商品ID",
    default: () => "'0'",
  })
  goodsId: string;

  @Column("bigint", { name: "goods_warehouse_id", comment: "商品库ID" })
  goodsWarehouseId: string;

  @Column("varchar", { name: "sign", length: 255 })
  sign: string;

  @Column("text", { name: "reply_content", comment: "商家回复内容" })
  replyContent: string;

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
    name: "is_anonymous",
    comment: "是否匿名 0.否|1.是",
    width: 1,
    default: () => "'1'",
  })
  isAnonymous: boolean;

  @Column("tinyint", {
    name: "is_top",
    comment: "是否置顶0.否|1.是",
    width: 1,
    default: () => "'0'",
  })
  isTop: boolean;

  @Column("longtext", {
    name: "goods_info",
    nullable: true,
    comment: "商品信息",
  })
  goodsInfo: string | null;

  @Column("bigint", { name: "attr_id", comment: "规格", default: () => "'0'" })
  attrId: string;

  constructor(init?: Partial<OrderCommentsEntity>) {
    super();
    Object.assign(this, init);
  }
}
