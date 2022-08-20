import { BaseEntity, Column, Entity, Index } from "typeorm";

@Index("store_id", ["mallId"], {})
@Index("mall_id", ["mallId"], {})
@Index("is_delete", ["isDelete"], {})
@Entity("t_goods_warehouse", { schema: "norait_shop" })
export class GoodsWarehouseEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("varchar", { name: "name", comment: "商品名称", length: 255 })
  name: string;

  @Column("varchar", { name: "subtitle", comment: "副标题", length: 255 })
  subtitle: string;

  @Column("varchar", { name: "keyword", comment: "关键词", length: 255 })
  keyword: string;

  @Column("decimal", {
    name: "original_price",
    comment: "原价",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  originalPrice: string;

  @Column("decimal", {
    name: "cost_price",
    comment: "成本价",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  costPrice: string;

  @Column("longtext", { name: "detail", comment: "商品详情，图文" })
  detail: string;

  @Column("varchar", { name: "cover_pic", comment: "商品缩略图", length: 255 })
  coverPic: string;

  @Column("text", { name: "pic_url", comment: "商品轮播图" })
  picUrl: string;

  @Column("varchar", { name: "video_url", comment: "商品视频", length: 255 })
  videoUrl: string;

  @Column("varchar", {
    name: "unit",
    comment: "单位",
    length: 255,
    default: () => "'件'",
  })
  unit: string;

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

  @Column("varchar", {
    name: "type",
    comment: "商品类型：goods--实体商品 ecard--电子卡密",
    length: 255,
    default: () => "'goods'",
  })
  type: string;

  @Column("bigint", {
    name: "ecard_id",
    comment: "卡密id",
    default: () => "'0'",
  })
  ecardId: string;

  constructor(init?: Partial<GoodsWarehouseEntity>) {
    super();
    Object.assign(this, init);
  }
}
