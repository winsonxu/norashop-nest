import { BaseEntity, Column, Entity, Index } from "typeorm";

@Index("mall_id", ["mallId"], {})
@Entity("t_wxapp_subscribe", { schema: "norait_shop" })
export class WxappSubscribeEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("varchar", { name: "tpl_name", length: 65 })
  tplName: string;

  @Column("varchar", { name: "tpl_id", length: 255 })
  tplId: string;

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

  constructor(init?: Partial<WxappSubscribeEntity>) {
    super();
    Object.assign(this, init);
  }
}
