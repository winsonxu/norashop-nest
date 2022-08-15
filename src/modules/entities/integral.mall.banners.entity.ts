import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("t_integral_mall_banners", { schema: "norait_shop" })
export class IntegralMallBannersEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

  @Column("int", { name: "banner_id" })
  bannerId: number;

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
}
