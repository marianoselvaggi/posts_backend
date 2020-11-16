import {MigrationInterface, QueryRunner} from 'typeorm';

export class addDefaultUser1605538750308 implements MigrationInterface {
    name = 'addDefaultUser1605538750308'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE `post` MODIFY COLUMN created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE `post` MODIFY COLUMN created_at datetime NOT NULL');
    }

}
