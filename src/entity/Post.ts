import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
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

    @Column()
    author: string;
    
    @Column()
    created_at: Date;
}