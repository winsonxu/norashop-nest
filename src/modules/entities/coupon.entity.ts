import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("is_delete", ["isDelete"], {})
@Index("store_id", ["mallId"], {})
@Entity("t_coupon", { schema: "norait_shop" })
export class CouponEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

  @Column("varchar", { name: "name", comment: "优惠券名称", length: 255 })
  name: string;

  @Column("smallint", { name: "type", comment: "优惠券类型：1=折扣，2=满减" })
  type: number;

  @Column("decimal", {
    name: "discount",
    comment: "折扣率",
    precision: 3,
    scale: 1,
    default: () => "'10.0'",
  })
  discount: string;

  @Column("int", { name: "pic_url", comment: "未用", default: () => "'0'" })
  picUrl: number;

  @Column("varchar", { name: "desc", comment: "未用", length: 2000 })
  desc: string;

  @Column("decimal", {
    name: "min_price",
    comment: "最低消费金额",
    precision: 10,
    scale: 2,
  })
  minPrice: string;

  @Column("decimal", {
    name: "sub_price",
    comment: "优惠金额",
    precision: 10,
    scale: 2,
  })
  subPrice: string;

  @Column("int", {
    name: "total_count",
    comment: "可发放的数量（剩余数量）",
    default: () => "'-1'",
  })
  totalCount: number;

  @Column("int", {
    name: "sort",
    comment: "排序按升序排列",
    default: () => "'1'",
  })
  sort: number;

  @Column("smallint", {
    name: "expire_type",
    comment: "到期类型：1=领取后N天过期，2=指定有效期",
  })
  expireType: number;

  @Column("int", {
    name: "expire_day",
    comment: "有效天数，expire_type=1时",
    default: () => "'0'",
  })
  expireDay: number;

  @Column("timestamp", {
    name: "begin_time",
    comment: "有效期开始时间",
    default: () => "'0000-00-00 00:00:00'",
  })
  beginTime: Date;

  @Column("timestamp", {
    name: "end_time",
    comment: "有效期结束时间",
    default: () => "'0000-00-00 00:00:00'",
  })
  endTime: Date;

  @Column("smallint", {
    name: "appoint_type",
    comment: "1 指定分类 2 指定商品 3全部",
  })
  appointType: number;

  @Column("varchar", { name: "rule", comment: "使用说明", length: 2000 })
  rule: string;

  @Column("tinyint", {
    name: "is_member",
    comment: "是否指定会员等级",
    width: 1,
    default: () => "'0'",
  })
  isMember: boolean;

  @Column("tinyint", {
    name: "is_delete",
    comment: "删除",
    width: 1,
    default: () => "'0'",
  })
  isDelete: boolean;

  @Column("timestamp", {
    name: "deleted_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  deletedAt: Date;

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

  @Column("decimal", {
    name: "discount_limit",
    nullable: true,
    comment: "折扣优惠上限",
    precision: 10,
    scale: 2,
  })
  discountLimit: string | null;

  @Column("int", {
    name: "can_receive_count",
    comment: "可领取数量",
    default: () => "'1'",
  })
  canReceiveCount: number;

  @Column("varchar", { name: "app_share_title", length: 255 })
  appShareTitle: string;

  @Column("varchar", { name: "app_share_pic", length: 255 })
  appSharePic: string;

  @Column("tinyint", {
    name: "use_obtain",
    comment: "领取后赠送",
    width: 1,
    default: () => "'0'",
  })
  useObtain: boolean;
}
