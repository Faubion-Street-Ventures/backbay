// @flow

import express from 'express';

const app: any = express();

app.get('/', (req, res) => {
  console.log('Hello World!');
  res.send('Hello World!');
});

export default app;
