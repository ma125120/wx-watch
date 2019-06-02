var pubSub = require('./pubSub');

function watchData() {
  let obj = { ...this.globalData };
  Object.keys(this.globalData).forEach(key => {
    Object.defineProperty(this.globalData, key, {
      set: (val) => {
        pubSub.emit(key, val, obj[key]);
        obj[key] = val;
      },
      get() {
        return obj[key];
      }
    })
  })
}

module.exports = watchData;
