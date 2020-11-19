import { createDBConnection  } from '../database';
import { getConnection } from 'typeorm';

export abstract class Setup {
  constructor() {   
  }

  static async settings() {
    return await createDBConnection();
  }

  static async deleteTestData() {
    const runner = getConnection().createQueryRunner();
    await runner.query('Delete from `author`;');
    await runner.query('Delete from `post`;');
  }
}