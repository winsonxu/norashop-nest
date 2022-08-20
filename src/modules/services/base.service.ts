/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-15 11:42:04
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-20 19:05:19
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { InjectRepository } from "@nestjs/typeorm";
import { CrudRequest } from "@nestjsx/crud";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { ApiConfigService } from "src/core/shared/api-config.service";
import { SnowflakeIdGenerate } from "src/core/utils/snowflakeId.generate";
import { BaseEntity, DeepPartial, Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";

export abstract class BaseService<T extends BaseEntity> extends TypeOrmCrudService<T> {
  // public override async createOne(req: CrudRequest, dto: DeepPartial<T>): Promise<T>{
  //   if (!dto.id) dto.id = SnowflakeIdGenerate.generate();
  //   return super.createOne(req, dto);
  // }
}