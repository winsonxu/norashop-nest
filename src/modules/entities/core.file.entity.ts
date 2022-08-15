import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("t_core_file", { schema: "norait_shop" })
export class CoreFileEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "mall_id", nullable: true, default: () => "'0'" })
  mallId: number | null;

  @Column("int", { name: "mch_id", nullable: true, default: () => "'0'" })
  mchId: number | null;

  @Column("varchar", {
    name: "file_name",
    nullable: true,
    comment: "文件名称",
    length: 255,
  })
  fileName: string | null;

  @Column("decimal", {
    name: "percent",
    nullable: true,
    comment: "下载进度",
    precision: 11,
    scale: 2,
    default: () => "'0.00'",
  })
  percent: string | null;

  @Column("tinyint", {
    name: "status",
    nullable: true,
    comment: "是否完成",
    width: 1,
    default: () => "'0'",
  })
  status: boolean | null;

  @Column("tinyint", {
    name: "is_delete",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isDelete: boolean | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("int", { name: "user_id", nullable: true, comment: "用户ID" })
  userId: number | null;
}
