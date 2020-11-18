import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import { UserBaseEntity } from './UserBaseEntity';

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
}