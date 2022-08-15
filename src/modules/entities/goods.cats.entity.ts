import { Column, Entity, Index } from "typeorm";
import { BaseEntity } from "./base.entity";

@Index("index1", ["mallId", "mchId", "status", "isDelete", "isShow"], {})
@Index("mall_id", ["mallId"], {})
@Index("mch_id", ["mchId"], {})
@Index("parent_id", ["parentId"], {})
@Entity("t_goods_cats", { schema: "norait_shop" })
export class GoodsCatsEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("bigint", { name: "mch_id", default: () => "'0'" })
  mchId: string;

  @Column("bigint", {
    name: "parent_id",
    comment: "父级ID",
    default: () => "'0'",
  })
  parentId: string;

  @Column("varchar", { name: "name", comment: "分类名称", length: 45 })
  name: string;

  @Column("varchar", { name: "pic_url", length: 255 })
  picUrl: string;

  @Column("int", {
    name: "sort",
    comment: "排序，升序",
    default: () => "'100'",
  })
  sort: number;

  @Column("varchar", { name: "big_pic_url", length: 255 })
  bigPicUrl: string;

  @Column("varchar", { name: "advert_pic", comment: "广告图片", length: 255 })
  advertPic: string;

  @Column("varchar", { name: "advert_url", comment: "广告链接", length: 255 })
  advertUrl: string;

  @Column("tinyint", {
    name: "status",
    comment: "是否启用:0.禁用|1.启用",
    width: 1,
    default: () => "'1'",
  })
  status: boolean;

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

  @Column("tinyint", {
    name: "is_show",
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  isShow: boolean | null;

  @Column("varchar", {
    name: "advert_open_type",
    comment: "打开方式",
    length: 65,
  })
  advertOpenType: string;

  @Column("text", { name: "advert_params", comment: "导航参数" })
  advertParams: string;

  @Column("longtext", { name: "link", nullable: true, comment: "链接详情" })
  link: string | null;

  constructor(init?: Partial<GoodsCatsEntity>) {
    super();
    Object.assign(this, init);
  }
}
