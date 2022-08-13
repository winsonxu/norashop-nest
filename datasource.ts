/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-06 12:03:18
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-13 16:33:48
 * @Description: 该文件是给CLI命令行执行yarn run typeorm:run和typeorm:create这些命令使用的
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */

import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from './src/core/common/snake-naming.strategy';
import 'dotenv/config';
import { join } from 'path';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: false,
  logging: Boolean(process.env.DB_LOGGING),
  entities: [join(__dirname, '/modules/entities/*.entity{.ts,.js}')],
  migrations: [join(__dirname, '/database/migrations/*{.ts,.js}')],
});
export default AppDataSource;
