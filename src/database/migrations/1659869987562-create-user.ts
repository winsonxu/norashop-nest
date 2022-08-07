import { MigrationInterface, QueryRunner } from "typeorm"

export class createUser1659869987562 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE nora_shop_user (
            id int unsigned NOT NULL AUTO_INCREMENT,
            mall_id int NOT NULL,
            mch_id int NOT NULL DEFAULT '0' COMMENT '多商户ID',
            username varchar(64) NOT NULL,
            password varchar(128) NOT NULL,
            nickname varchar(45) NOT NULL DEFAULT '',
            auth_key varchar(128) NOT NULL,
            access_token varchar(128) NOT NULL,
            mobile varchar(255) NOT NULL DEFAULT '',
            unionid varchar(64) NOT NULL DEFAULT '',
            created_at timestamp NOT NULL,
            updated_at timestamp NOT NULL,
            deleted_at timestamp NULL DEFAULT NULL,
            is_delete tinyint(1) NOT NULL DEFAULT '0',
            PRIMARY KEY (id),
            KEY username (username),
            KEY access_token (access_token),
            KEY mall_id (mall_id),
            KEY mch_id (mch_id)
        ) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE nora_shop_user');
    }

}
