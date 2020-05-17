const express = require('express');
const fetch = require('node-fetch');

const app = express();

const PORT = 3000;

// creating a proxy to access ledger's cross origin server
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/contracts', (req, res) => {
  fetch(
    'https://trade.ledgerx.com/api/contracts?after_ts=2020-05-21 21:00:00&limit=200'
  )
    .then((res) => res.json())
    .then((data) => res.status(200).json(data));
});

app.get('/api/books', (req, res) => {
  fetch('https://trade.ledgerx.com/api/book-tops')
    .then((res) => res.json())
    .then((data) => res.status(200).json(data));
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
