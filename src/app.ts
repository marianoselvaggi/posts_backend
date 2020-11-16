import express, { Application } from 'express';
import morgan from 'morgan';
import RouteIndex from './routes/index.routes';
import RoutePost from './routes/posts.routes';

export class App {
    public app: Application;
    
    constructor(private port?: number) {
      this.app = express();
      this.settings();
      this.middlewares();
    }

    private settings() {
      this.app.set('port', this.port || 3000);
    }

    private middlewares() {
      this.app.use(morgan('dev'));
      this.app.use(express.json());
      this.app.use(RouteIndex);
      this.app.use('/posts', RoutePost);
    }

    async listen() {
      await this.app.listen(this.app.get('port'));
      // eslint-disable-next-line no-console
      console.log('Server listening port',this.app.get('port'));
    }
}