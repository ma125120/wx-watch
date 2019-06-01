
var pubSubFn = function() {
  return {
    handlers: {},
    // 订阅事件
    on(eventType, handler) {
      if(!(eventType in this.handlers)) {
        this.handlers[eventType] = new Set();
      }
  
      this.handlers[eventType].add(handler);
      return this;
    },
    off(eventType, handler) {
      let handlers = this.handlers[eventType];
      if (handlers.has(handler)) {
        handlers.delete(handler);
      }
      return this;
    },
      // 触发事件(发布事件)
    emit(eventType, ...args) {
      let handlers = this.handlers[eventType];
      if (!handlers || handlers.size == 0) return ;
      [...handlers].forEach(handler => {
        handler.apply(this, args);
      });
      return this;
    }
  }
};

module.exports = pubSubFn();