import { App } from '../app';
import { Connection } from 'typeorm';
import { Application } from 'express';
import supertest from 'supertest';
import { Setup } from './setup';

let server: Application;
let conn: Connection;
let authorId: number;

beforeAll(async () => {
  const app = new App();
  conn = await Setup.settings();
  server = app.app;
});

afterAll(async () => {
  await Setup.deleteTestData();
  await conn.close();
});

test('Create an Author', async () => {
  const request = await supertest(server).post('/authors').send({
    'firstName': 'Author Test',
    'lastName': 'Author Test'
  });
  authorId = +request.body.data.id;
  expect(authorId).toBeGreaterThan(0);
  expect(request.status).toEqual(200);
  expect(request.body.message).toEqual('Author successfully added!');
});

test('Get an Author by Id', async () => {
  const request = await supertest(server).get('/authors/'+authorId);
  expect(request.status).toEqual(200);
  expect(request.body.data.id).toEqual(authorId);
});

test('Get Authors', async () => {
  const request = await supertest(server).get('/authors/');
  expect(request.status).toEqual(200);
  expect(request.body.data.length).toBeGreaterThan(0);
});

test('Update an Author', async () => {
  const request = await supertest(server).put('/authors/'+authorId).send({
    'lastName': 'Update Author'
  });
  expect(request.status).toEqual(200);
  expect(request.body.message).toEqual('Author successfully updated!');
});

test('Delete an Author', async () => {
  const request = await supertest(server).delete('/authors/'+authorId);
  expect(request.status).toEqual(200);
  expect(request.body.message).toEqual('Author successfully deleted!');
});
