import {MigrationInterface, QueryRunner} from 'typeorm';

export class addPostsBaseentity1605644521029 implements MigrationInterface {
    name = 'addPostsBaseentity1605644521029'

    public async up(queryRunner: QueryRunner): Promise<void> {      
      await queryRunner.query('ALTER TABLE `post` ADD COLUMN created_by varchar(255) NOT NULL');
      await queryRunner.query('ALTER TABLE `post` ADD COLUMN updated_by varchar(255) NULL');
      await queryRunner.query('ALTER TABLE `post` ADD COLUMN `updated_at` datetime NULL');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE `post` DROP COLUMN created_by');
      await queryRunner.query('ALTER TABLE `post` DROP COLUMN updated_by');
      await queryRunner.query('ALTER TABLE `post` DROP COLUMN updated_at');
    }
}
