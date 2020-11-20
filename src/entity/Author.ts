import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import { Post } from './Post';
import { User } from './User';

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

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @OneToMany(() => Post, post => post.author)
    posts: Post;
}