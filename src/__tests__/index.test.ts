const request = require('supertest');
// import { Express } from 'express-serve-static-core';
import { Application } from 'express';
import { App } from '../app';

let server: Application;

beforeAll(async () => {    
  const app = new App(4000);
  server = app.app;
});

test('Welcome', async () => {
  const res = await request(server).get('/');
  expect(res.status).toEqual(200);
  expect(res.body).toStrictEqual('Welcome to API.');
});