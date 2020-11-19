import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Post } from './Post';

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
      type: 'varchar',
      length: 255,
      name: 'first_name'
    })
    firstName: string;

    @Column({
      type: 'varchar',
      length: 255,
      name: 'last_name'
    })
    lastName: string;

    @OneToMany(() => Post, post => post.author)
    posts: Post;
}