import { Injectable } from "@nestjs/common";
import datasource from '../../database/datasource';
import { UserEntity } from "../entities/user.entity";
/*
 * @Author: 2022-8-11 17:35:07
 * @Date: winsonxu
 * Copyright (c) 2016-2022 norait
 */
@Injectable()
export class UserService{
  public async getByAccount(username: string): Promise<UserEntity | null>{
    const user = datasource.manager
    .getRepository(UserEntity)
    .findOne({ where : {username } })
    return user;
  }

  async getById(id:number): Promise<UserEntity | null>{
    return datasource.manager.getRepository(UserEntity).findOne({ where : { id } });
  }
}