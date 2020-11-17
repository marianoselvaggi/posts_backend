import { createDBConnection  } from '../database';
import { getConnection } from 'typeorm';

export class Setup {
  constructor() {   
  }

  async settings() {
    return await createDBConnection();
  }

  async deleteTestData() {
    const runner = getConnection().createQueryRunner();
    await runner.query('Delete * from Post;');
  }
}