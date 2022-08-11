/*
 * @Author: winsonxu 
 * @Date: 2022-08-11 16:44:54 
 * @Last Modified by:   winsonxu 
 * @Last Modified time: 2022-08-11 16:44:54 
 */
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from '../core/common/snake-naming.strategy';
import 'dotenv/config';

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
  entities: ['dist/modules/**/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*{.ts,.js}'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('数据源初始化完成！');
  })
  .catch((err) => {
    console.error('数据源初始化失败！', err);
  });
export default AppDataSource;
