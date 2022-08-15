import { BaseEntity, Column, Entity } from "typeorm";

@Entity("t_integral_mall_banners", { schema: "norait_shop" })
export class IntegralMallBannersEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("bigint", { name: "banner_id" })
  bannerId: string;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "deleted_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  deletedAt: Date;

  @Column("tinyint", { name: "is_delete", default: () => "'0'" })
  isDelete: number;

  constructor(init?: Partial<IntegralMallBannersEntity>) {
    super();
    Object.assign(this, init);
  }
}
