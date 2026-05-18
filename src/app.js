const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hola desde Node.js y GitHub Actions',
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
  });
});

module.exports = app;
