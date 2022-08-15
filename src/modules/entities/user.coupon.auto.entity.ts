import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("auto_coupon_id", ["autoCouponId"], {})
@Index("user_coupon_id", ["userCouponId"], {})
@Entity("t_user_coupon_auto", { schema: "norait_shop" })
export class UserCouponAutoEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_coupon_id" })
  userCouponId: number;

  @Column("int", { name: "auto_coupon_id" })
  autoCouponId: number;

  @Column("tinyint", {
    name: "is_delete",
    comment: "删除",
    width: 1,
    default: () => "'0'",
  })
  isDelete: boolean;
}
