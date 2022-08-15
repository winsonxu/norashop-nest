import { BaseEntity, Column, Entity } from "typeorm";

@Entity("migrations", { schema: "norait_shop" })
export class MigrationsEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "timestamp" })
  timestamp: string;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  constructor(init?: Partial<MigrationsEntity>) {
    super();
    Object.assign(this, init);
  }
}
