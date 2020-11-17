import { createPool } from 'mysql2/promise';
import { createConnection, Connection } from 'typeorm';
import _logger from './logging';

export async function connect() {
  const connection = await createPool({
    host: 'localhost',
    user: 'root',
    password: 'm4r14n0.',
    database: 'node_mysql_ts',
    connectionLimit: 10
  });
  return connection;
}

export function createDBConnection(): Promise<Connection> {
  const SECONDS_TO_RETRY_TO_CONNECT = 5;
  const { TYPEORM_USERNAME, TYPEORM_PASSWORD, TYPEORM_DATABASE, TYPEORM_HOST, TYPEORM_PORT } = process.env;
  if (!TYPEORM_PORT) throw Error('TYPEORM_PORT not defined');
  
  const sleep = (timeInMilisec: number) => new Promise(resolve => setTimeout(resolve, timeInMilisec));

  return createConnection({
    name: 'default',
    type: 'mysql',
    host: TYPEORM_HOST,
    port: +TYPEORM_PORT,
    username: TYPEORM_USERNAME,
    password: TYPEORM_PASSWORD,
    database: TYPEORM_DATABASE,
    migrations: ['src/migration/**/*.ts'],
    cli: {'migrationsDir': 'migrations'},
    logging: true,
    entities: ['src/entity/**/*.ts'],
    synchronize: false,
    dropSchema: false
  }).then(connection => {
    _logger.log('info', 'Database connected!');
    return connection;
  })
    .catch(async (error: Error) => {
      _logger.log('error', `Database connection error: ${error.message}`);
      await sleep(SECONDS_TO_RETRY_TO_CONNECT * 1000);
      return createDBConnection();
    });
};