class Logger {

    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }

}

class Singleton {
  constructor() {
    // if there is not an Singleton instance
    if (!Singleton.instance){
      // then we want to create a Singleton instance
      Singleton.instance = new Logger();
    }
  }

  getInstance(){
    return Singleton.instance;
  }
}

module.exports = Singleton;
