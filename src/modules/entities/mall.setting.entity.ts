import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("key", ["key"], {})
@Index("mall_id", ["mallId"], {})
@Entity("t_mall_setting", { schema: "norait_shop" })
export class MallSettingEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

  @Column("varchar", { name: "key", length: 65 })
  key: string;

  @Column("mediumtext", { name: "value", nullable: true })
  value: string | null;

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;
}
