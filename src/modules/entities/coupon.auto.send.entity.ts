import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("t_coupon_auto_send", { schema: "norait_shop" })
export class CouponAutoSendEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

  @Column("int", { name: "coupon_id", comment: "优惠卷" })
  couponId: number;

  @Column("int", {
    name: "event",
    comment: "触发事件：1=分享，2=购买并付款",
    default: () => "'1'",
  })
  event: number;

  @Column("int", {
    name: "send_count",
    comment: "最多发放次数，0表示不限制",
    default: () => "'0'",
  })
  sendCount: number;

  @Column("tinyint", {
    name: "is_delete",
    comment: "删除",
    width: 1,
    default: () => "'0'",
  })
  isDelete: boolean;

  @Column("timestamp", {
    name: "deleted_at",
    default: () => "CURRENT_TIMESTAMP",
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

  @Column("tinyint", {
    name: "type",
    comment: "领取人 0--所有人 1--指定用户",
    width: 1,
    default: () => "'0'",
  })
  type: boolean;

  @Column("longtext", {
    name: "user_list",
    nullable: true,
    comment: "指定用户id列表",
  })
  userList: string | null;
}
