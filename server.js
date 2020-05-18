const express = require('express');
const fetch = require('node-fetch');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const PORT = 3000;
// custom proxy to access ledger's cross origin server
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/data', async (req, res) => {
  const booksResponse = await fetch('https://trade.ledgerx.com/api/book-tops');
  const books = await booksResponse.json();
  const booksData = books.data.reduce((acc, curr) => {
    const id = curr.contract_id;
    acc[id] = curr;
    return acc;
  }, {});

  const contractResponse = await fetch(
    'https://trade.ledgerx.com/api/contracts?after_ts=2020-05-21 21:00:00&limit=200'
  );
  const contracts = await contractResponse.json();
  const mergeData = contracts.data
    .reduce((acc, curr) => {
      const id = curr.id;
      const date = new Date(curr.date_expires).toLocaleDateString();
      booksData[id] = Object.assign({}, booksData[id], curr, { date });
      acc.push(booksData[id]);
      return acc;
    }, [])
    .filter((contract) => contract.active === true)
    .reverse()
    .reduce(
      (acc, curr, i) => {
        if (i % 2 === 0 && i !== 0) {
          acc.total.push(acc.strikePairs);
          acc.strikePairs = [];
        }
        acc.strikePairs.push(curr);
        return acc;
      },
      { strikePairs: [], total: [] }
    );
  return res.status(200).json(mergeData.total);
});

// proxy for websocket api
const wsProxy = createProxyMiddleware('/ws', {
  target: 'wss://trade.ledgerx.com/api/ws',
  changeOrigin: true
});

app.get(wsProxy);

app
  .listen(PORT, () => console.log(`listening on ${PORT}`))
  .on('upgrade', wsProxy.upgrade);
