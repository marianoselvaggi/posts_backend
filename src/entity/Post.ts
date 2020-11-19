import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from 'typeorm';
import { UserBaseEntity } from './UserBaseEntity';
import { Author } from './Author';

@Entity()
export class Post extends UserBaseEntity {
  constructor() {
    super();
  }

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({
    type: 'varchar',
    length: 100
  })
  title: string;
  
  @Column({
    type: 'text',
    nullable: true
  })
  description?: string;
  
  @Column({
    type: 'text',
    nullable: true
  })
  post_url?: string;

  @ManyToOne(() => Author, author => author.posts)
  author: Author;
}