import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
      name: 'nick_name'
    })
    nickName: string;

    @Column()
    age: number;
}