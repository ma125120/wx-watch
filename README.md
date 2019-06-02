## 安装

```javascript
npm i wx-watch -S --production
```

## 使用
```javascript
// app.js
var { watchData, } = require('/miniprogram_npm/wx-watch/index.js');

App({
  onLaunch() {
    this.watchData(); /* 监听this.globalData的变化，并触发事件，其他页面监听的值必须在globalData中预先定义，否则无法监听 */
  },
  watchData,
  globalData: {
    userInfo: null,
  }
});

// 其他需要监听globalData的页面.js
var { getPage } = require('../../miniprogram_npm/wx-watch/index.js');
const app = getApp();

/**
 * getPage(页面参数，app)
*/
getPage({
  watch: {
    userInfo(userInfo, oldUserInfo) {
      console.log(`来自app.glodalData的userInfo`);
    }
  },
  // 其他参数
}, app)
```