'use strict';

// LoopCaster
// Triggers (casts) a callback at an interval (through chanting)
class LoopCaster {
  constructor(size, interval, cb){
    this.size = size;
    this.interval = interval; 
    this.count = 0;
    this.callback = cb;
  }

  /**
   * chant
   * increments count and trigger callback at an interval
   */
  chant(data){    
    this.count++;
    if(this.count%this.interval == 0 || this.count == this.size){
      this.callback(this.count, data);
    } 
  }
}

module.exports = (size, interval, cb) => new LoopCaster(size, interval, cb);