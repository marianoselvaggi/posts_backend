import {MigrationInterface, QueryRunner} from 'typeorm';

export class addPost1605528808439 implements MigrationInterface {
    name = 'addPost1605528808439'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TABLE `post` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(100) NOT NULL, `description` text NULL, `post_url` text NULL, `created_at` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DROP TABLE `post`');
    }

}
