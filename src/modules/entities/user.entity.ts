import { Column, Entity, Index } from "typeorm";
import { BaseEntity } from "./base.entity";

@Index("access_token", ["accessToken"], {})
@Index("mall_id", ["mallId"], {})
@Index("mch_id", ["mchId"], {})
@Index("username", ["username"], {})
@Entity("t_user", { schema: "norait_shop" })
export class UserEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("bigint", {
    name: "mch_id",
    comment: "多商户ID",
    default: () => "'0'",
  })
  mchId: string;

  @Column("varchar", { name: "username", length: 64 })
  username: string;

  @Column("varchar", { name: "password", length: 128 })
  password: string;

  @Column("varchar", { name: "nickname", length: 45 })
  nickname: string;

  @Column("varchar", { name: "auth_key", length: 128 })
  authKey: string;

  @Column("varchar", { name: "access_token", length: 128 })
  accessToken: string;

  @Column("varchar", { name: "mobile", length: 255 })
  mobile: string;

  @Column("varchar", { name: "unionid", length: 64 })
  unionid: string;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;

  @Column("json", { name: "menu", comment: "菜单权限" })
  menu: object;

  constructor(init?: Partial<UserEntity>) {
    super();
    Object.assign(this, init);
  }
}
