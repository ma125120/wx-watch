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
var { getPage, FAIL } = require('../../miniprogram_npm/wx-watch/index.js');
const app = getApp();

// FAIL 为 一个失败的Symbol常量

/**
 * getPage(页面参数，app)
*/
getPage({
  watch: {
    userInfo(userInfo, oldUserInfo) {
      // 返回的数据存在三种情况
      // 1. 初始值，一般都是不存在的，可以使用 if (!userInfo) return ;直接中断
      // 2. 失败 (失败的时候可以通过赋值导出的常量FAIL)
      // 3. 成功

      if (!userInfo) return ;
      if (userInfo === FAIL) {
        // 失败
        this.setData({ isShowLogin: true });
      } else if (userInfo) {
        // 成功
        this.setData({ isShowLogin: false, userInfo: userInfo });
      }

      console.log(`来自app.glodalData的userInfo`);
    }
  },
  // 其他参数
}, app)
```