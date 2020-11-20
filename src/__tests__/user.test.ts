import { App } from '../app';
import { Connection } from 'typeorm';
import { Application } from 'express';
import supertest from 'supertest';
import { Setup } from './setup';

let server: Application;
let conn: Connection;
let userId: number;

beforeAll(async () => {
  const app = new App();
  conn = await Setup.settings();
  server = app.app;
});

afterAll(async () => {
  await Setup.deleteTestData();
  await conn.close();
});

test('Create a User', async () => {
  const request = await supertest(server).post('/users').send({
    'nickName': 'UserTest',
    'age': 40
  });
  userId = +request.body.data.id;
  expect(userId).toBeGreaterThan(0);
  expect(request.status).toEqual(200);
  expect(request.body.message).toEqual('User successfully added!');
});

test('Get a User by Id', async () => {
  const request = await supertest(server).get('/users/'+userId);
  expect(request.status).toEqual(200);
  expect(request.body.data.id).toEqual(userId);
});

test('Get Users', async () => {
  const request = await supertest(server).get('/users/');
  expect(request.status).toEqual(200);
  expect(request.body.data.length).toBeGreaterThan(0);
});

test('Update a User', async () => {
  const request = await supertest(server).put('/users/'+userId).send({
    'nickName': 'UpdateUser'
  });
  expect(request.status).toEqual(200);
  expect(request.body.message).toEqual('User successfully updated!');
});

test('Delete a User', async () => {
  const request = await supertest(server).delete('/users/'+userId);
  expect(request.status).toEqual(200);
  expect(request.body.message).toEqual('User successfully deleted!');
});
