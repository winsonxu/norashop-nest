/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-20 08:33:27
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-21 11:06:18
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { BaseEntity, Column, Entity, Index } from "typeorm";

export enum isAdmin { Normal , Operator, Admin, SuperAdmin }

@Index("username", ["username"], {})
@Index("access_token", ["accessToken"], {})
@Index("mall_id", ["mallId"], {})
@Index("mch_id", ["mchId"], {})
@Entity("t_user", { schema: "norait_shop" })
export class UserEntity extends BaseEntity {
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "mall_id" })
  mallId: string;

  @Column("bigint", {
    name: "mch_id",
    comment: "多商户ID",
    default: () => "'0'",
  })
  mchId: string;

  @Column("varchar", { name: "username", length: 64 })
  username: string;

  @Column("varchar", { name: "password", length: 128 })
  password: string;

  @Column("varchar", { name: "nickname", length: 45 })
  nickname: string;

  @Column("varchar", { name: "auth_key", length: 128 })
  authKey: string;

  @Column("varchar", { name: "access_token", length: 128 })
  accessToken: string;

  @Column("varchar", { name: "mobile", length: 255 })
  mobile: string;

  @Column("varchar", { name: "unionid", length: 64 })
  unionid: string;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;

  @Column("json", { name: "menu", comment: "菜单权限" })
  menu: object;

  @Column("int", { name: "is_admin", default: () => 0 })
  isAdmin: number;

  constructor(init?: Partial<UserEntity>) {
    super();
    Object.assign(this, init);
  }
}
