import express from 'express';
import http from 'http';
import morgan from 'morgan';
import SocketIO from 'socket.io';
import { price } from './db'
import { logger } from './util';

const app = express();

const server = http.Server(app);

let io = new SocketIO(server);

app.use(morgan('combined', {stream: logger.stream}));

app.get('/', (req, res) => {
  price.setup(io);
  res.sendFile(__dirname + '/public/index.html' );
}); 

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send(err);
});




export default server;