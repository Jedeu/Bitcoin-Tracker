import express from 'express';
import morgan from 'morgan';

import { logger } from './util';

const app = express();

app.use(morgan('combined', {stream: logger.stream}));

app.get('/', (req, res) => {
  res.send('Hello World!');
}); 

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send(err);
});

export default app;