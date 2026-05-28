const request = require('supertest');
const app = require('../src/app');

test('GET / debe devolver un mensaje', async () => {
  const response = await request(app).get('/');

  expect(response.statusCode).toBe(200);
  expect(response.body.message.trim()).toBe(
    'Hola desde Node.js con GitHub Actions en Render (27 de Mayo de 2026 V2)'
  );
});

test('GET /health debe devolver status ok', async () => {
  const response = await request(app).get('/health');

  expect(response.statusCode).toBe(200);
  expect(response.body.status.trim()).toBe('ok. Todo está funcionando correctamente');
});
