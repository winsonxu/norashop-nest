import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("t_home_block", { schema: "norait_shop" })
export class HomeBlockEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

  @Column("varchar", { name: "name", length: 65 })
  name: string;

  @Column("text", { name: "value" })
  value: string;

  @Column("tinyint", {
    name: "type",
    comment: "样式类型：1.默认|2.样式一|3.样式二",
    width: 1,
    default: () => "'0'",
  })
  type: boolean;

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
}
