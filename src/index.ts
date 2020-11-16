import 'reflect-metadata';
import { App } from './app';
//import { createConnection } from 'typeorm';
// import { Post } from './entity/Post';

async function main() {
  const app = new App();
  await app.listen();
}

main();
/* createConnection().then(async connection => {

  // eslint-disable-next-line no-console
  console.log('Inserting a new post into the database...');
  const post = new Post();
  
  post.title = 'First post';
  post.description = 'something';
  post.created_at = new Date();
  
  await connection.manager.save(post);
  // eslint-disable-next-line no-console
  console.log('Saved a new post with id: ' + post.id);

  // eslint-disable-next-line no-console
  console.log('Loading posts from the database...');
  const posts = await connection.manager.find(Post);
  // eslint-disable-next-line no-console
  console.log('Loaded posts: ', posts);

  // eslint-disable-next-line no-console
  console.log('Here you can setup and run express/koa/any other framework.');

// eslint-disable-next-line no-console
}).catch(error => console.log(error)); */
