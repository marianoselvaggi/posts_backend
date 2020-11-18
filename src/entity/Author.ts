import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}