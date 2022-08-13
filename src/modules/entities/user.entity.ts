/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-07 22:52:47
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-13 12:42:16
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("access_token", ["accessToken"], {})
@Index("mall_id", ["mallId"], {})
@Index("mch_id", ["mchId"], {})
@Index("username", ["username"], {})
@Entity("nora_shop_user", { schema: "norait_shop" })
export class UserEntity{
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

  @Column("int", { name: "mch_id", comment: "多商户ID", default: () => "'0'" })
  mchId: number;

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

  @Column("timestamp", {
    name: "deleted_at"
  })
  deletedAt: Date;

  @Column("tinyint", { name: "is_delete", width: 1, default: () => "'0'" })
  isDelete: boolean;

  @Column("json", { name: "menu", default: () => {} })
  menu: object;
}