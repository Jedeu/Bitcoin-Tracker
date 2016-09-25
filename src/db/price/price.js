import { r } from '../dbdash';

export const price = {}

price.setup = function (io) {
  io.on('connection', function(socket) {
    r.table('price')
      .run()
      .then(function (result) {
        let json = JSON.stringify(result);
        io.emit('all prices', json);
      });
  });
}

//TODO: make sure this works

price.update = function(io) {
  r.table('price')
    .changes
    .run()
    .then(function (result) {
      let json = JSON.stringify(result);
      io.emit('prices update', json)
    });
}