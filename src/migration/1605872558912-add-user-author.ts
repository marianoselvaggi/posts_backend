import {MigrationInterface, QueryRunner} from "typeorm";

export class addUserAuthor1605872558912 implements MigrationInterface {
    name = 'addUserAuthor1605872558912'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `nick_name` varchar(255) NOT NULL, `age` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
      await queryRunner.query('ALTER TABLE `author` ADD COLUMN `userId` int NULL');
      await queryRunner.query('CREATE UNIQUE INDEX `REL_645811deaaaa772f9e6c2a4b92` ON `author`(`userId`)');
      await queryRunner.query('ALTER TABLE `author` ADD CONSTRAINT `FK_645811deaaaa772f9e6c2a4b927` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE `author` DROP FOREIGN KEY `FK_645811deaaaa772f9e6c2a4b927`');
      await queryRunner.query('DROP INDEX `REL_645811deaaaa772f9e6c2a4b92` ON `author`');
      await queryRunner.query('ALTER TABLE `author` DROP INDEX `REL_645811deaaaa772f9e6c2a4b92`;');
      await queryRunner.query('ALTER TABLE `author` DROP COLUMN `userId`');
      await queryRunner.query('DROP TABLE `user`');
    }

}
