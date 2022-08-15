import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("mall_id", ["mallId"], {})
@Entity("t_wxapp_config", { schema: "norait_shop" })
export class WxappConfigEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

  @Column("varchar", { name: "appid", length: 128 })
  appid: string;

  @Column("varchar", { name: "appsecret", length: 255 })
  appsecret: string;

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

  @Column("varchar", { name: "mchid", length: 32 })
  mchid: string;

  @Column("varchar", { name: "key", length: 32 })
  key: string;

  @Column("varchar", { name: "cert_pem", length: 2000 })
  certPem: string;

  @Column("varchar", { name: "key_pem", length: 2000 })
  keyPem: string;
}
