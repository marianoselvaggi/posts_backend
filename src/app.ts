import express, { Application } from 'express';
import morgan from 'morgan';
import RouteIndex from './routes/index.routes';
import RoutePost from './routes/posts.routes';
import RouteAuthor from './routes/authors.routes';
import { createDBConnection } from './database';
import _logger from './logging';

export class App {
    public app: Application;
    
    constructor(private port?: number) {
      this.app = express();
      this.settings();
      this.middlewares();
    }

    private async settings() {
      require('dotenv').config({ path: __dirname + `/config/${process.env.NODE_ENV}.env` });
      this.app.set('port', this.port || 3000);
    }

    private middlewares() {
      this.app.use(morgan('dev'));
      this.app.use(express.json());
      this.app.use(RouteIndex);
      this.app.use('/authors', RouteAuthor);
      this.app.use('/posts', RoutePost);
    }

    async listen() {
      await createDBConnection();
      await this.app.listen(this.app.get('port'));
      _logger.log('info', `Server listening port ${this.app.get('port')}`);
    }
}