const request = require('supertest');
const app = require('../src/app');

test('GET / debe devolver un mensaje', async () => {
  const response = await request(app).get('/');

  expect(response.statusCode).toBe(200);
  expect(response.body.message).toBe('Hola desde Node.js con GitHub Actions en Render');
});

test('GET /health debe devolver status ok', async () => {
  const response = await request(app).get('/health');

  expect(response.statusCode).toBe(200);
  expect(response.body.status).toBe('ok. Todo está funcionando correctamente');
});
