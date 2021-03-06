import Bluebird from 'bluebird';
import rp from 'request-promise';
import { r } from '../db/dbdash';
import { logger } from './logger';

const canadianEndPoint = 'https://api.bitcoinaverage.com/ticker/global/CAD/last';
const usEndPoint = 'https://api.bitcoinaverage.com/ticker/global/USD/last';
const chileanEndPoint = 'https://api.bitcoinaverage.com/ticker/global/CLP/last';

let CADRequest = rp(canadianEndPoint);
let USDRequest = rp(usEndPoint);
let CLPRequest = rp(chileanEndPoint);

export const btc = {};

btc.getLatestPrices = function () {
  Bluebird.all([CADRequest, USDRequest, CLPRequest])
  .spread((CADResponse, USDResponse, CLPResponse) => {
    let time = _captureTimestamp();
    r.table('price')
      .insert({
        CAD: CADResponse,
        USD: USDResponse,
        CLP: CLPResponse,
        time: time
      })
      .run();
  })
  .catch((err) => {
    logger.error('Error retrieving data: ', err);
  });
}

function _captureTimestamp() {
  let now = new Date();
  let hours = now.getUTCHours();
  let minutes = now.getUTCMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  return hours + ":" + minutes + " GMT";
}