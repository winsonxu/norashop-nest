/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-21 00:00:10
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-21 00:10:51
 * @Description: 所有实体增加、更新、删除时记录日志
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { BaseEntity, EntitySubscriberInterface, EventSubscriber, InsertEvent, RemoveEvent, UpdateEvent } from "typeorm";

@EventSubscriber()
export class EntitySubscriber implements EntitySubscriberInterface {
  beforeInsert(event: InsertEvent<BaseEntity>): void {
    console.log('beforeInsert event ', event);

  }
  beforeUpdate(event: UpdateEvent<BaseEntity>): void {
    console.log('beforeUpdate event ', event);
  }
  beforeRemove(event: RemoveEvent<BaseEntity>): void {
    console.log('beforeRemove event ', event);
  }
}