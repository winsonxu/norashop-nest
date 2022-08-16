import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("t_attachment_storage", { schema: "norait_shop" })
export class AttachmentStorageEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id", default: () => "'0'" })
  mallId: string;

  @Column("tinyint", {
    name: "type",
    comment: "存储类型：1=本地，2=阿里云，3=腾讯云，4=七牛",
    width: 1,
    default: () => "'1'",
  })
  type: boolean;

  @Column("longtext", { name: "config", comment: "存储配置" })
  config: string;

  @Column("tinyint", {
    name: "status",
    comment: "状态：0=未启用，1=已启用",
    width: 1,
    default: () => "'0'",
  })
  status: boolean;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("bigint", {
    name: "user_id",
    comment: "存储设置所属账号",
    default: () => "'1'",
  })
  userId: string;

  constructor(init?: Partial<AttachmentStorageEntity>) {
    super();
    Object.assign(this, init);
  }
}
