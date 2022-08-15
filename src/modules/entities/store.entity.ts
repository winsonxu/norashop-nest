import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("t_store", { schema: "norait_shop" })
export class StoreEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

  @Column("int", { name: "mch_id", default: () => "'0'" })
  mchId: number;

  @Column("varchar", { name: "name", comment: "店铺名称", length: 65 })
  name: string;

  @Column("varchar", { name: "mobile", comment: "联系电话", length: 255 })
  mobile: string;

  @Column("varchar", { name: "address", comment: "地址", length: 255 })
  address: string;

  @Column("int", { name: "province_id", default: () => "'0'" })
  provinceId: number;

  @Column("int", { name: "city_id", default: () => "'0'" })
  cityId: number;

  @Column("int", { name: "district_id", default: () => "'0'" })
  districtId: number;

  @Column("varchar", { name: "longitude", comment: "经度", length: 255 })
  longitude: string;

  @Column("varchar", { name: "latitude", comment: "纬度", length: 255 })
  latitude: string;

  @Column("int", { name: "score", comment: "店铺评分", default: () => "'5'" })
  score: number;

  @Column("varchar", { name: "cover_url", comment: "店铺封面图", length: 255 })
  coverUrl: string;

  @Column("text", { name: "pic_url", comment: "门店轮播图" })
  picUrl: string;

  @Column("varchar", {
    name: "business_hours",
    comment: "营业时间",
    length: 125,
  })
  businessHours: string;

  @Column("longtext", { name: "description", comment: "门店描述" })
  description: string;

  @Column("mediumtext", { name: "scope", comment: "门店经营范围" })
  scope: string;

  @Column("tinyint", {
    name: "is_default",
    comment: "默认总店0.否|1.是",
    width: 1,
    default: () => "'0'",
  })
  isDefault: boolean;

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
    name: "is_all_day",
    comment: "是否全天营业0.否|1.是",
    width: 1,
    default: () => "'0'",
  })
  isAllDay: boolean;

  @Column("text", { name: "extra_attributes" })
  extraAttributes: string;

  @Column("tinyint", {
    name: "status",
    comment: "状态开关",
    width: 1,
    default: () => "'1'",
  })
  status: boolean;
}
