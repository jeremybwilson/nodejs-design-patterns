var LogStrategy = require('./logStrategy');
var config = require('./config');

class Logger {

  constructor( strategy='toConsole' ) {
    this.logs = [];
    this.strategy = LogStrategy[strategy];
  }

  get count() {
    return this.logs.length;
  }

  changeStrategy(newStrategy) {
    this.strategy = LogStrategy[newStrategy];
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp })
    // console.log(`${timestamp} - ${message}`);
    this.strategy(timestamp, message);
  }

}

module.exports = new Logger(config.logs.strategy);
