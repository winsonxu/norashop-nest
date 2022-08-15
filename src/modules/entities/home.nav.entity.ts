import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("t_home_nav", { schema: "norait_shop" })
export class HomeNavEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

  @Column("varchar", { name: "name", comment: "导航名称", length: 65 })
  name: string;

  @Column("varchar", { name: "url", comment: "导航链接", length: 255 })
  url: string;

  @Column("varchar", { name: "open_type", comment: "打开方式", length: 65 })
  openType: string;

  @Column("varchar", { name: "icon_url", comment: "导航图标", length: 255 })
  iconUrl: string;

  @Column("int", { name: "sort", comment: "排序", default: () => "'100'" })
  sort: number;

  @Column("tinyint", {
    name: "status",
    comment: "状态：0.隐藏|1.显示",
    width: 1,
    default: () => "'0'",
  })
  status: boolean;

  @Column("text", { name: "params", comment: "导航参数" })
  params: string;

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

  @Column("varchar", { name: "sign", comment: "插件标识", length: 65 })
  sign: string;

  @Column("longtext", { name: "link", nullable: true, comment: "链接详情" })
  link: string | null;
}
