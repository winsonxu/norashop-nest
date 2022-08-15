import { BaseEntity, Column, Entity } from "typeorm";

@Entity("t_integral_mall_cats", { schema: "norait_shop" })
export class IntegralMallCatsEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("bigint", { name: "cat_id" })
  catId: string;

  @Column("int", { name: "sort", default: () => "'100'" })
  sort: number;

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

  constructor(init?: Partial<IntegralMallCatsEntity>) {
    super();
    Object.assign(this, init);
  }
}
