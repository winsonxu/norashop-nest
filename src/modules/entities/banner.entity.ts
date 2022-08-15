import { BaseEntity, Column, Entity } from "typeorm";

@Entity("t_banner", { schema: "norait_shop" })
export class BannerEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id", default: () => "'0'" })
  mallId: string;

  @Column("varchar", { name: "pic_url", comment: "图片", length: 2080 })
  picUrl: string;

  @Column("varchar", { name: "title", comment: "标题", length: 255 })
  title: string;

  @Column("varchar", { name: "page_url", comment: "页面路径", length: 2048 })
  pageUrl: string;

  @Column("varchar", { name: "open_type", comment: "打开方式", length: 65 })
  openType: string;

  @Column("text", { name: "params", comment: "导航参数" })
  params: string;

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;

  @Column("timestamp", {
    name: "created_at",
    comment: "创建时间",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "deleted_at",
    comment: "删除时间",
    default: () => "'0000-00-00 00:00:00'",
  })
  deletedAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    comment: "修改时间",
    default: () => "'0000-00-00 00:00:00'",
  })
  updatedAt: Date;

  @Column("varchar", { name: "sign", comment: "插件标识", length: 65 })
  sign: string;

  @Column("longtext", { name: "link", nullable: true, comment: "链接详情" })
  link: string | null;

  constructor(init?: Partial<BannerEntity>) {
    super();
    Object.assign(this, init);
  }
}
