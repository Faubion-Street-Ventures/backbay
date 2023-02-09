import express from 'express';
import router from './router.js';
import bodyParser from 'body-parser';
const app = express(); // Create an express app

app.use(bodyParser.urlencoded({ extended: true, limit: '25mb' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json({ limit: '25mb' }));

app.use((req, res, next) => {
  next();
});
app.use(router);

export default app;
