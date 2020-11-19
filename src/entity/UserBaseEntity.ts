import { BaseEntity ,Column, BeforeInsert, BeforeUpdate } from 'typeorm';

export class UserBaseEntity extends BaseEntity {
    @Column({
      type: 'varchar',
      length: 255,
      name: 'created_by'
    })
    createdBy: string;
    
    @Column({
      name: 'created_at'
    })
    createdAt: Date;

    @Column({
      type: 'varchar',
      length: 255,
      name: 'updated_by'
    })
    updatedBy: string;

    @Column({
      name: 'updated_at',
      nullable: true
    })
    updatedAt?: Date;

    @BeforeInsert()
    setInsertAssociate() {
      this.createdBy = 'INSERT'
      this.createdAt = new Date();
    }

    @BeforeUpdate()
    setUpdateAssociate() {
      this.updatedBy = 'UPDATE';
      this.updatedAt = new Date();
    }
};