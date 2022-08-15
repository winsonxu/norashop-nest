import { BaseEntity, Column, Entity } from "typeorm";

@Entity("t_pay_type", { schema: "norait_shop" })
export class PayTypeEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("varchar", { name: "name", comment: "支付名称", length: 255 })
  name: string;

  @Column("tinyint", {
    name: "type",
    comment: "1:微信  2:支付宝",
    width: 1,
    default: () => "'1'",
  })
  type: boolean;

  @Column("varchar", { name: "appid", length: 255 })
  appid: string;

  @Column("varchar", { name: "mchid", length: 32 })
  mchid: string;

  @Column("varchar", { name: "key", length: 32 })
  key: string;

  @Column("varchar", { name: "cert_pem", length: 2000 })
  certPem: string;

  @Column("varchar", { name: "key_pem", length: 2000 })
  keyPem: string;

  @Column("tinyint", {
    name: "is_service",
    comment: "是否为服务商支付  0否 1是",
    width: 1,
    default: () => "'0'",
  })
  isService: boolean;

  @Column("varchar", { name: "service_key", length: 32 })
  serviceKey: string;

  @Column("varchar", {
    name: "service_appid",
    comment: "服务商appid",
    length: 255,
  })
  serviceAppid: string;

  @Column("varchar", {
    name: "service_mchid",
    comment: "服务商mch_id",
    length: 255,
  })
  serviceMchid: string;

  @Column("varchar", { name: "service_cert_pem", length: 2000 })
  serviceCertPem: string;

  @Column("varchar", { name: "service_key_pem", length: 2000 })
  serviceKeyPem: string;

  @Column("tinyint", {
    name: "is_auto_add",
    comment: "0否 1是",
    default: () => "'0'",
  })
  isAutoAdd: number;

  @Column("varchar", { name: "alipay_appid", length: 32 })
  alipayAppid: string;

  @Column("varchar", {
    name: "app_private_key",
    comment: "支付宝应用私钥",
    length: 2000,
  })
  appPrivateKey: string;

  @Column("text", {
    name: "alipay_public_key",
    nullable: true,
    comment: "支付宝平台公钥",
  })
  alipayPublicKey: string | null;

  @Column("text", { name: "appcert", nullable: true })
  appcert: string | null;

  @Column("text", {
    name: "alipay_rootcert",
    nullable: true,
    comment: "支付宝根证书",
  })
  alipayRootcert: string | null;

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  updatedAt: Date;

  @Column("timestamp", {
    name: "created_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "deleted_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  deletedAt: Date;

  constructor(init?: Partial<PayTypeEntity>) {
    super();
    Object.assign(this, init);
  }
}
