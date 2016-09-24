import express from 'express';
import http from 'http';
import morgan from 'morgan';
import SocketIO from 'socket.io';

import { logger } from './util';

const app = express();

const server = http.Server(app);

let io = new SocketIO(server);

let port = process.env.PORT || 8080;

app.use(morgan('combined', {stream: logger.stream}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html' );
}); 

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send(err);
});

io.on('connection', (socket) => {
  socket.emit('news', {hello: 'world'});
  socket.on('my other event', (data) => {
    logger.info(data);
  });
});



export default server;