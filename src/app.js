const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hola desde Node.js con GitHub Actions en Render (27 de Mayo de 2026 V2)',
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok. Todo está funcionando correctamente',
  });
});

module.exports = app;
