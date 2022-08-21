/*
 * @Author: winsonxu 
 * @Date: 2022-08-11 16:44:46 
 * @Last Modified by:   winsonxu 
 * @Last Modified time: 2022-08-11 16:44:46 
 */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { isNil } from 'lodash';
import { DataSource } from 'typeorm';

import { SnakeNamingStrategy } from '../common/snake-naming.strategy';
import { EntitySubscriber } from '../subscriber/entity.subscriber';
import { UserSubscriber } from '../subscriber/user.subscriber';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  get isDevelopment(): boolean {
    return this.nodeEnv === 'development';
  }

  get isProduction(): boolean {
    return this.nodeEnv === 'production';
  }

  get isTest(): boolean {
    return this.nodeEnv === 'test';
  }

  private getNumber(key: string): number {
    const value = this.get(key);

    try {
      return Number(value);
    } catch {
      throw new Error(key + ' environment variable is not a number');
    }
  }

  private getBoolean(key: string): boolean {
    const value = this.get(key);

    try {
      return Boolean(JSON.parse(value));
    } catch {
      throw new Error(key + ' env var is not a boolean');
    }
  }

  private getString(key: string): string {
    const value = this.get(key);

    return value.replace(/\\n/g, '\n');
  }

  get nodeEnv(): string {
    return this.getString('NODE_ENV');
  }

  get fallbackLanguage(): string {
    return this.getString('FALLBACK_LANGUAGE');
  }

  get TypeOrmConfig(): TypeOrmModuleOptions {
    let entities = [
      __dirname + '/../../modules/**/*.entity{.ts,.js}',
      __dirname + '/../../modules/**/*.view-entity{.ts,.js}',
    ];
    let migrations = [__dirname + '/../../database/migrations/*{.ts,.js}'];

    // if (module.hot) {
    //   const entityContext = require.context(
    //     './../../modules',
    //     true,
    //     /\.entity\.ts$/,
    //   );
    //   entities = entityContext.keys().map((id) => {
    //     const entityModule = entityContext<Record<string, unknown>>(id);
    //     const [entity] = Object.values(entityModule);

    //     return entity as string;
    //   });
    //   const migrationContext = require.context(
    //     './../../database/migrations',
    //     false,
    //     /\.ts$/,
    //   );

    //   migrations = migrationContext.keys().map((id) => {
    //     const migrationModule = migrationContext<Record<string, unknown>>(id);
    //     const [migration] = Object.values(migrationModule);

    //     return migration as string;
    //   });
    // }

    return {
      entities,
      migrations,
      keepConnectionAlive: !this.isTest,
      dropSchema: this.isTest,
      type: 'mysql',
      name: 'default',
      host: this.getString('DB_HOST'),
      port: this.getNumber('DB_PORT'),
      username: this.getString('DB_USERNAME'),
      password: this.getString('DB_PASSWORD'),
      database: this.getString('DB_DATABASE'),
      migrationsRun: false,
      subscribers: [ 
        // UserSubscriber,
        EntitySubscriber
      ],
      logging: this.getBoolean('DB_LOGGING'),
      namingStrategy: new SnakeNamingStrategy(),
      supportBigNumbers:true, // 数据库支持bigint或decimal类型列时，需要设此option为true (默认：false)
      bigNumberStrings:true, //supportBigNumbers和bigNumberStrings启用 强制bigint或decimal列以JavaScript字符串类型返回(默认：false)
    };
  }

  get TypeOrmDatasource(): DataSource{
    let entities = [
      __dirname + '/../../modules/**/*.entity{.ts,.js}',
      __dirname + '/../../modules/**/*.view-entity{.ts,.js}',
    ];
    let migrations = [__dirname + '/../../database/migrations/*{.ts,.js}'];
    const datasource = new DataSource({
      type: 'mysql',
      name: 'default',
      host: this.getString('DB_HOST'),
      port: this.getNumber('DB_PORT'),
      username: this.getString('DB_USERNAME'),
      password: this.getString('DB_PASSWORD'),
      database: this.getString('DB_DATABASE'),
      namingStrategy: new SnakeNamingStrategy(),
      logging: this.getBoolean('DB_LOGGING'),
      entities: entities,
      migrations: migrations,
      subscribers: [ 
        // UserSubscriber,
        EntitySubscriber
      ],
      supportBigNumbers:true, // 数据库支持bigint或decimal类型列时，需要设此option为true (默认：false)
      bigNumberStrings:true, //supportBigNumbers和bigNumberStrings启用 强制bigint或decimal列以JavaScript字符串类型返回(默认：false)
    })
    datasource.initialize()
      .then(() => {
        console.log('数据源连接成功！');
      })
      .catch((err) => {
        console.error('数据源连接失败！', err);
      });
    return datasource;
  };

  get awsS3Config() {
    return {
      bucketRegion: this.getString('AWS_S3_BUCKET_REGION'),
      bucketApiVersion: this.getString('AWS_S3_API_VERSION'),
      bucketName: this.getString('AWS_S3_BUCKET_NAME'),
    };
  }

  get documentationEnabled(): boolean {
    return this.getBoolean('ENABLE_DOCUMENTATION');
  }

  get natsEnabled(): boolean {
    return this.getBoolean('NATS_ENABLED');
  }

  get natsConfig() {
    return {
      host: this.getString('NATS_HOST'),
      port: this.getNumber('NATS_PORT'),
    };
  }

  get authConfig() {
    return {
      privateKey: this.getString('JWT_PRIVATE_KEY'),
      publicKey: this.getString('JWT_PUBLIC_KEY'),
      jwtExpirationTime: this.getNumber('JWT_EXPIRATION_TIME'),
    };
  }

  get appConfig() {
    return {
      port: this.getString('PORT'),
    };
  }

  private get(key: string): string {
    const value = this.configService.get<string>(key);

    if (isNil(value)) {
      throw new Error(key + ' environment variable does not set'); // probably we should call process.exit() too to avoid locking the service
    }

    return value;
  }

  get uploadConfig() {
    return { 
      uploadPath: this.getString('UPLOAD_PATH'),
      uploadDomain: this.getString('UPLOAD_DOMAIN'),
    }
  }
}
