//This is ugh but I can't figure out how to import this using ES6
let CronJob = require('cron').CronJob;
import { btc } from './btc';

export const scheduler = {};

scheduler.updatePrices = function() {
  return new CronJob('* * * * * ', btc.getLatestPrices, null, true);
};