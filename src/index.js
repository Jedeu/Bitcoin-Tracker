import app from './app';
import { logger } from './util';

app.listen(8080, function() {
  logger.info('Bit Widget listening on port 8080');
});

process.on('uncaughtException', err => logger.error('uncaught exception:', err));
process.on('unhandledRejection', error => logger.error('unhandled rejection', error))