import { BaseEntity, Column, Entity, Index } from "typeorm";

@Index("store_id", ["mallId"], {})
@Entity("t_core_action_log", { schema: "norait_shop" })
export class CoreActionLogEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("bigint", { name: "user_id", comment: "操作人ID" })
  userId: string;

  @Column("varchar", { name: "model", comment: "模型名称", length: 255 })
  model: string;

  @Column("bigint", { name: "model_id", comment: "模模型ID" })
  modelId: string;

  @Column("longtext", { name: "before_update", nullable: true })
  beforeUpdate: string | null;

  @Column("longtext", { name: "after_update", nullable: true })
  afterUpdate: string | null;

  @Column("timestamp", {
    name: "created_at",
    comment: "创建时间",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;

  @Column("varchar", { name: "remark", length: 255 })
  remark: string;

  constructor(init?: Partial<CoreActionLogEntity>) {
    super();
    Object.assign(this, init);
  }
}
