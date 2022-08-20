import { BaseEntity, Column, Entity, Index } from "typeorm";

@Index("store_id", ["mallId"], {})
@Index("user_id", ["userId"], {})
@Index("coupon_id", ["couponId"], {})
@Index("is_delete", ["isDelete"], {})
@Index("is_use", ["isUse"], {})
@Entity("t_user_coupon", { schema: "norait_shop" })
export class UserCouponEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("bigint", { name: "user_id", comment: "用户" })
  userId: string;

  @Column("bigint", { name: "coupon_id", comment: "优惠卷" })
  couponId: string;

  @Column("decimal", {
    name: "sub_price",
    comment: "满减",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  subPrice: string;

  @Column("decimal", {
    name: "discount",
    comment: "折扣",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  discount: string;

  @Column("decimal", {
    name: "coupon_min_price",
    comment: "最低消费金额",
    precision: 10,
    scale: 2,
  })
  couponMinPrice: string;

  @Column("int", {
    name: "type",
    comment: "优惠券类型：1=折扣，2=满减",
    default: () => "'1'",
  })
  type: number;

  @Column("timestamp", {
    name: "start_time",
    comment: "有效期开始时间",
    default: () => "'0000-00-00 00:00:00'",
  })
  startTime: Date;

  @Column("timestamp", {
    name: "end_time",
    comment: "有效期结束时间",
    default: () => "'0000-00-00 00:00:00'",
  })
  endTime: Date;

  @Column("tinyint", {
    name: "is_use",
    comment: "是否已使用：0=未使用，1=已使用",
    width: 1,
    default: () => "'0'",
  })
  isUse: boolean;

  @Column("smallint", {
    name: "is_delete",
    comment: "删除",
    default: () => "'0'",
  })
  isDelete: number;

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

  @Column("varchar", { name: "receive_type", comment: "获取方式", length: 255 })
  receiveType: string;

  @Column("longtext", { name: "coupon_data", comment: "优惠券信息json格式" })
  couponData: string;

  @Column("decimal", {
    name: "discount_limit",
    nullable: true,
    comment: "折扣优惠上限",
    precision: 10,
    scale: 2,
  })
  discountLimit: string | null;

  constructor(init?: Partial<UserCouponEntity>) {
    super();
    Object.assign(this, init);
  }
}
