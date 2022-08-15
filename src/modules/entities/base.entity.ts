/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-15 11:50:20
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-15 11:51:07
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Column } from "typeorm";

export class BaseEntity{
  @Column("bigint", { primary: true, name: "id", unsigned: true })
  id: string;
} 