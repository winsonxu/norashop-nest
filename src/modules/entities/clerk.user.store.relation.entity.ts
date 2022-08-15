import { BaseEntity, Column, Entity } from "typeorm";

@Entity("t_clerk_user_store_relation", { schema: "norait_shop" })
export class ClerkUserStoreRelationEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "clerk_user_id" })
  clerkUserId: string;

  @Column("bigint", { name: "store_id" })
  storeId: string;

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;

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

  constructor(init?: Partial<ClerkUserStoreRelationEntity>) {
    super();
    Object.assign(this, init);
  }
}
