/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-20 16:40:20
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-20 16:44:46
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import type {
  EntitySubscriberInterface,
  InsertEvent,
  RemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { EventSubscriber } from 'typeorm';

import { UserEntity } from "../../modules/entities/user.entity";
import { SnowflakeIdGenerate } from "src/core/utils/snowflakeId.generate";
import { Md5 } from "md5-typescript";

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<UserEntity> {
  listenTo(): typeof UserEntity {
    return UserEntity;
  }

  beforeInsert(event: InsertEvent<UserEntity>): void {
    console.log('inster user');
    if (!event.entity.id) {
      event.entity.id = SnowflakeIdGenerate.generate();
    }
    if (event.entity.password) {
      event.entity.password = Md5.init(event.entity.password);
    }
  }

  beforeUpdate(event: UpdateEvent<UserEntity>): void {
    console.log('update user');
    // // FIXME check event.databaseEntity.password
    // const entity = event.entity as UserEntity;

    // if (entity.password !== event.databaseEntity.password) {
    //   entity.password = generateHash(entity.password!);
    // }
  }

  beforeRemove(event: RemoveEvent<UserEntity>): void {
    console.log('remove user');
  }
}