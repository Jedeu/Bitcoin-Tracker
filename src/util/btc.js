import Bluebird from 'bluebird';
import rp from 'request-promise';
import { r } from '../db/dbdash';
import { logger } from './util';

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
    r.table('price')
      .insert({
        CAD: CADResponse,
        USD: USDResponse,
        CLP: CLPResponse,
        time: new Date()
      }, {
        conflict: "update"
      })
      .run();
  })
  .catch((err) => {
    logger.error('Error retrieving data: ', err);
  });
}
