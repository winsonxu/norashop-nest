import { Injectable } from "@nestjs/common";
import { Md5 } from "md5-typescript";
import { BusinessException } from "src/core/exception/business.exception";
import { UpdateResult } from "typeorm/query-builder/result/UpdateResult";
import { Repository } from "typeorm/repository/Repository";
import datasource from '../../database/datasource';
import { UserEntity } from "../entities/user.entity";
/*
 * @Author: 2022-8-11 17:35:07
 * @Date: winsonxu
 * Copyright (c) 2016-2022 norait
 */
@Injectable()
export class UserService{
  private userRepository:Repository<UserEntity>
  constructor(){
      this.userRepository = datasource.manager.getRepository(UserEntity);
  }

  public async getByAccount(username: string): Promise<UserEntity | null>{
    const user = this.userRepository.findOne({ where : {username } })
    return user;
  }

  async getById(id:number): Promise<UserEntity | null>{
    return this.userRepository.findOne({ where : { id } });
  }

  async setPassword(id:number, password:string): Promise<void>{
    const md5password:string = Md5.init(password);
    const result:UpdateResult = await this.userRepository.update(id, { password: md5password });
    if(!result.affected){
      throw new BusinessException(5001, '更新失败');
    }
  }
}