import { App } from '../app';
import { Connection } from 'typeorm';
import { Application } from 'express';
import supertest from 'supertest';
import { Setup } from './setup';
import { createAuthor } from './mock';
import { Author } from '../entity/Author';

let server: Application;
let conn: Connection;
let postId: number;
let author: Author;

beforeAll(async () => {
  const app = new App();
  conn = await Setup.settings();
  server = app.app;
  author = await createAuthor();
});

afterAll(async () => {
  await Setup.deleteTestData();
  await conn.close();
});

test('Create a Post', async () => {
  const request = await supertest(server).post('/posts').send({
    'title': 'Post test',
    'description': 'Test',
    'post_url': 'https://www.google.com',
    'authorId': author.id
  });
  postId = +request.body.data.id;
  expect(postId).toBeGreaterThan(0);
  expect(request.status).toEqual(200);
  expect(request.body.message).toEqual('Post successfully added!');
});

test('Get a Post by Id', async () => {
  const request = await supertest(server).get('/posts/'+postId);
  expect(request.status).toEqual(200);
  expect(request.body.data.id).toEqual(postId);
});

test('Get a Posts', async () => {
  const request = await supertest(server).get('/posts/');
  expect(request.status).toEqual(200);
  expect(request.body.data.length).toBeGreaterThan(0);
});

test('Update a Post', async () => {
  const request = await supertest(server).put('/posts/'+postId).send({
    'title': 'Update Post test'
  });
  expect(request.status).toEqual(200);
  expect(request.body.message).toEqual('Post successfully updated!');
});

test('Delete a Post', async () => {
  const request = await supertest(server).delete('/posts/'+postId);
  expect(request.status).toEqual(200);
  expect(request.body.message).toEqual('Post successfully deleted!');
});
