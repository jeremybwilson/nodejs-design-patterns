var logger = require('./Logger');

logger.log('Hello World');
logger.log('Hi World');
logger.log('Yo World');

// changes from 'toMorseCode' to 'toFile'
logger.changeStrategy('toFile');

logger.log('Hello World');
logger.log('Hi World');
logger.log('Yo World');

// changes from 'toFile' to 'none'
logger.changeStrategy('none');

logger.log('Hello World');
logger.log('Hi World');
logger.log('Yo World');
