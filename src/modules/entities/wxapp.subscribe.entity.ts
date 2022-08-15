import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("mall_id", ["mallId"], {})
@Entity("t_wxapp_subscribe", { schema: "norait_shop" })
export class WxappSubscribeEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

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
}
