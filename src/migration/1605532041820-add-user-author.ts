import {MigrationInterface, QueryRunner} from 'typeorm';

export class addUserAuthor1605532041820 implements MigrationInterface {
    name = 'addUserAuthor1605532041820'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE `post` ADD COLUMN author varchar(255)');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE `post` DROP COLUMN author');
    }

}
