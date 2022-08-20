/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-11 17:34:14
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-20 13:27:58
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CrudRequest } from "@nestjsx/crud";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Md5 } from "md5-typescript";
import { BusinessException } from "src/core/exception/business.exception";
import { ApiConfigService } from "src/core/shared/api-config.service";
import { SnowflakeIdGenerate } from "src/core/utils/snowflakeId.generate";
import { DeepPartial } from "typeorm";
import { UpdateResult } from "typeorm/query-builder/result/UpdateResult";
import { Repository } from "typeorm/repository/Repository";
import { UserEntity } from "../entities/user.entity";
import { BaseService } from "./base.service";
/*
 * @Author: 2022-8-11 17:35:07
 * @Date: winsonxu
 * Copyright (c) 2016-2022 norait
 */
@Injectable()
export class UserService extends BaseService<UserEntity>{

  private userRepository:Repository<UserEntity>
  constructor(@InjectRepository(UserEntity) repo:Repository<UserEntity>,
    private readonly apiConfigService: ApiConfigService){
      super(repo);
      this.userRepository = this.apiConfigService.TypeOrmDatasource.manager.getRepository(UserEntity);
  }

  public async getByAccount(username: string): Promise<UserEntity | null>{
    const user = this.userRepository.findOne({ where : {username } })
    return user;
  }

  async getById(id:string): Promise<UserEntity | null>{
    return this.userRepository.findOne({ where : { id } });
  }

  async setPassword(id:string, password:string): Promise<void>{
    const md5password:string = Md5.init(password);
    const result:UpdateResult = await this.userRepository.update(id, { password: md5password });
    if(!result.affected){
      throw new BusinessException(5001, '更新失败');
    }
  }
}