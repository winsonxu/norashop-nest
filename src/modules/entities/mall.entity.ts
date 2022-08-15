import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("t_mall", { schema: "norait_shop" })
export class MallEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 64 })
  name: string;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

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
}
