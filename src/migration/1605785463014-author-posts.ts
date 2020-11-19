import {MigrationInterface, QueryRunner} from 'typeorm';

export class authorPosts1605785463014 implements MigrationInterface {
    name = 'authorPosts1605785463014'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE `post` ADD COLUMN authorId int NOT NULL;');
      await queryRunner.query('CREATE TABLE `author` (`id` int NOT NULL AUTO_INCREMENT, `first_name` varchar(255) NOT NULL, `last_name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
      await queryRunner.query('ALTER TABLE `post` ADD CONSTRAINT `FK_c6fb082a3114f35d0cc27c518e0` FOREIGN KEY (`authorId`) REFERENCES `author`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE `post` DROP FOREIGN KEY `FK_c6fb082a3114f35d0cc27c518e0`');
      await queryRunner.query('DROP TABLE `author`');
      await queryRunner.query('ALTER TABLE `post` DROP COLUMN `authorId`');
    }

}
