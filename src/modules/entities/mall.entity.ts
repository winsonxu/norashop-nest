import { BaseEntity, Column, Entity } from "typeorm";

@Entity("t_mall", { schema: "norait_shop" })
export class MallEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("varchar", { name: "name", length: 64 })
  name: string;

  @Column("bigint", { name: "user_id", unsigned: true })
  userId: string;

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

  @Column("tinyint", {
    name: "is_recycle",
    comment: "是否回收",
    width: 1,
    default: () => "'0'",
  })
  isRecycle: boolean;

  @Column("tinyint", {
    name: "is_disable",
    comment: "是否禁用",
    width: 1,
    default: () => "'0'",
  })
  isDisable: boolean;

  @Column("timestamp", {
    name: "expired_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  expiredAt: Date;

  constructor(init?: Partial<MallEntity>) {
    super();
    Object.assign(this, init);
  }
}
