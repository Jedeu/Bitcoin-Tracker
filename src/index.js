import server from './app';
import { logger } from './util';

server.listen(3000, function() {
  logger.info('Bit Widget listening on port 3000');
});

process.on('uncaughtException', err => logger.error('uncaught exception:', err));
process.on('unhandledRejection', error => logger.error('unhandled rejection', error))