var pubSub = require('./pubSub');

var __page = {
  onLoad(app) {
    Object.keys(this.watch).forEach((key) => {
      if (this.watch[key] && typeof this.watch[key] == 'function') {
        let handler = this.watch[key];
        handler.call(this, app.globalData[key]);
        pubSub.on(key, handler.bind(this));
      }
    });
  },
  onUnload(app) {
    Object.keys(this.watch).forEach((key) => {
      if (this.watch[key] && typeof this.watch[key] == 'function') {
        let handler = this.watch[key];
        pubSub.off(key, handler);
      }
    });
  }
}

let getPage = (page, app) => Page({
  ...__page,
  ...page,
  data: {
    ...page.data,
  },
  onLoad(...args) {
    __page.onLoad.call(this, app);
    page.onLoad && page.onLoad.call(this, ...args);
  },
  onUnload(...args) {
    __page.onUnload.call(this, app);
    page.onUnload && page.onUnload.call(this, ...args);
  },
})

module.exports = getPage