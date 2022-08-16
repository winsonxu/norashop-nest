import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("mall_id", ["mallId"], {})
@Index("mch_id", ["mchId"], {})
@Index("type", ["type"], {})
@Entity("t_attachment_group", { schema: "norait_shop" })
export class AttachmentGroupEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("bigint", { name: "mch_id", default: () => "'0'" })
  mchId: string;

  @Column("varchar", { name: "name", length: 64 })
  name: string;

  @Column("smallint", { name: "is_delete", default: () => "'0'" })
  isDelete: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("tinyint", {
    name: "is_recycle",
    comment: "是否加入回收站 0.否|1.是",
    width: 1,
    default: () => "'0'",
  })
  isRecycle: boolean;

  @Column("tinyint", {
    name: "type",
    comment: "0 图片 1商品",
    default: () => "'0'",
  })
  type: number;

  constructor(init?: Partial<AttachmentGroupEntity>) {
    super();
    Object.assign(this, init);
  }
}
