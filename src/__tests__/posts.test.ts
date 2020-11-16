const request = require('supertest');
// import { Express } from 'express-serve-static-core';
import { Application } from 'express';
import { App } from '../app';

let server: Application;
let id: number;

beforeAll(async () => {    
  const app = new App(4000);
  server = app.app;
});

test('Get all posts', async () => {    
  const res = await request(server).get('/posts');
  expect(res.status).toEqual(200);
  expect(res.body.data?.length).toBeGreaterThan(3);
});

test('Create a post', async() => {
  const res = await request(server).post('/posts').send({
    title: 'Title test',
    description: 'Desc test',
    image_url: 'https://www.google.com'
  });
  id = res.body.data;
  expect(res.status).toEqual(200);
  expect(res.body).toMatchObject({
    message: 'Post successfully added!'
  });
});

test('Get a post', async() => {    
  const res = await request(server).get(`/posts/${id}`);
  expect(res.status).toEqual(200);
});

test('Update a post', async() => {
  const res = await request(server).put(`/posts/${id}`).send({
    title: 'Title updated'
  });
  expect(res.status).toEqual(200);
  expect(res.body.message).toEqual('Post successfully updated!');
});
test('Delete a post', async() => {
  const res = await request(server).delete(`/posts/${id}`);
  expect(res.status).toEqual(200);    
});

