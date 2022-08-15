import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("t_core_exception_log", { schema: "norait_shop" })
export class CoreExceptionLogEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

  @Column("tinyint", {
    name: "level",
    comment: "异常等级1.报错|2.警告|3.记录信息",
    default: () => "'1'",
  })
  level: number;

  @Column("mediumtext", { name: "title", comment: "异常标题" })
  title: string;

  @Column("mediumtext", { name: "content", comment: "异常内容" })
  content: string;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;
}
