import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("attachment_group_id", ["attachmentGroupId"], {})
@Index("mall_id", ["mallId"], {})
@Index("mch_id", ["mchId"], {})
@Index("type", ["type"], {})
@Index("is_delete", ["isDelete"], {})
@Index("is_recycle", ["isRecycle"], {})
@Entity("t_attachment", { schema: "norait_shop" })
export class AttachmentEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "storage_id" })
  storageId: string;

  @Column("bigint", { name: "attachment_group_id", default: () => "'0'" })
  attachmentGroupId: string;

  @Column("bigint", { name: "user_id" })
  userId: string;

  @Column("bigint", { name: "mall_id", default: () => "'0'" })
  mallId: string;

  @Column("bigint", {
    name: "mch_id",
    comment: "多商户id",
    default: () => "'0'",
  })
  mchId: string;

  @Column("varchar", { name: "name", length: 128 })
  name: string;

  @Column("int", { name: "size", comment: "大小：字节" })
  size: number;

  @Column("varchar", { name: "url", length: 2080 })
  url: string;

  @Column("varchar", { name: "thumb_url", length: 2080 })
  thumbUrl: string;

  @Column("tinyint", { name: "type", comment: "类型：1=图片，2=视频" })
  type: number;

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
    comment: "是否加入回收站 0.否|1.是",
    width: 1,
    default: () => "'0'",
  })
  isRecycle: boolean;

  constructor(init?: Partial<AttachmentEntity>) {
    super();
    Object.assign(this, init);
  }
}
