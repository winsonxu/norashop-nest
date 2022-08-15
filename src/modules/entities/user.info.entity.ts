import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("parent_id", ["parentId"], {})
@Index("platform_user_id", ["platformUserId"], {})
@Index("temp_parent_id", ["tempParentId"], {})
@Index("user_id", ["userId"], {})
@Entity("t_user_info", { schema: "norait_shop" })
export class UserInfoEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("varchar", { name: "avatar", comment: "头像", length: 255 })
  avatar: string;

  @Column("varchar", {
    name: "platform_user_id",
    comment: "用户所属平台的用户id",
    length: 255,
  })
  platformUserId: string;

  @Column("int", { name: "integral", comment: "积分", default: () => "'0'" })
  integral: number;

  @Column("int", {
    name: "total_integral",
    comment: "最高积分",
    default: () => "'0'",
  })
  totalIntegral: number;

  @Column("decimal", {
    name: "balance",
    comment: "余额",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  balance: string;

  @Column("decimal", {
    name: "total_balance",
    comment: "总余额",
    precision: 12,
    scale: 2,
    default: () => "'0.00'",
  })
  totalBalance: string;

  @Column("int", { name: "parent_id", comment: "上级id", default: () => "'0'" })
  parentId: number;

  @Column("tinyint", {
    name: "is_blacklist",
    comment: "是否黑名单",
    width: 1,
    default: () => "'0'",
  })
  isBlacklist: boolean;

  @Column("varchar", { name: "contact_way", comment: "联系方式", length: 255 })
  contactWay: string;

  @Column("varchar", { name: "remark", comment: "备注", length: 255 })
  remark: string;

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;

  @Column("datetime", {
    name: "junior_at",
    comment: "成为下级时间",
    default: () => "'0000-00-00 00:00:00'",
  })
  juniorAt: Date;

  @Column("varchar", {
    name: "platform",
    comment: "用户所属平台标识",
    length: 255,
  })
  platform: string;

  @Column("int", {
    name: "temp_parent_id",
    comment: "临时上级",
    default: () => "'0'",
  })
  tempParentId: number;

  @Column("varchar", { name: "remark_name", comment: "备注名", length: 60 })
  remarkName: string;

  @Column("varchar", { name: "pay_password", comment: "支付密码", length: 255 })
  payPassword: string;
}
