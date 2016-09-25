import { CronJob } from 'cron';
import { btc } from './btc';

export const scheduler = {};

scheduler.updatePrices = function() {
  return new CronJob('* * * * * ', btc.getLatestPrices, null, true);
};