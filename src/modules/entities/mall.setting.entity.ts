import { Column, Entity, Index } from "typeorm";
import { BaseEntity } from "./base.entity";

@Index("key", ["key"], {})
@Index("mall_id", ["mallId"], {})
@Entity("t_mall_setting", { schema: "norait_shop" })
export class MallSettingEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("varchar", { name: "key", length: 65 })
  key: string;

  @Column("mediumtext", { name: "value", nullable: true })
  value: string | null;

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;

  constructor(init?: Partial<MallSettingEntity>) {
    super();
    Object.assign(this, init);
  }
}
