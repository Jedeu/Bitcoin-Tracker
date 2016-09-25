import { r } from '../dbdash';
import { logger } from '../../util';

export const price = {}

price.setup = function (io) {
  io.on('connection', function(socket) {
    _retrievePriceData(io);
    _updateLatestPrices(io);
  });
}

function _retrievePriceData(io) {
  r.table('price')
    .orderBy(r.desc('time'))
    .nth(1)
    .run()
    .then(function(result) {
      let json = JSON.stringify(result);
      io.emit('all prices', json);
    });
}

function _updateLatestPrices(io) {
  r.table('price')
  .changes()
  .run({cursor: true}, function(err, cursor) {
    //TODO: Turn this into a Promise
    if (err) {
      logger.error(err);
    }
    cursor.each(function(err, row) {
    if (err) {
      logger.error(err);
    }
    let json = JSON.stringify(row);
    io.emit('updated prices', json);
    });
  });
}