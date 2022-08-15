import { BaseEntity, Column, Entity } from "typeorm";

@Entity("t_printer", { schema: "norait_shop" })
export class PrinterEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("bigint", { name: "mch_id", default: () => "'0'" })
  mchId: string;

  @Column("varchar", { name: "type", comment: "类型", length: 255 })
  type: string;

  @Column("varchar", { name: "name", comment: "名称", length: 255 })
  name: string;

  @Column("longtext", { name: "setting", comment: "设置" })
  setting: string;

  @Column("tinyint", {
    name: "is_delete",
    comment: "删除",
    width: 1,
    default: () => "'0'",
  })
  isDelete: boolean;

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

  constructor(init?: Partial<PrinterEntity>) {
    super();
    Object.assign(this, init);
  }
}
