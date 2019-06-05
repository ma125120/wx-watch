
const { FAIL } = require('./constant.js');

function getUserInfo() {
  var that = this,
      userInfo = that.globalData.userInfo;
  if(userInfo) {
    return ;
  }

  wx.getSetting({
    success (res) {
      let auth = res.authSetting;

      if(auth['scope.userInfo'] === undefined) {
        that.globalData.userInfo = FAIL;
        // console.log('用户未授权，跳往授权页面');
      } else {
        wx.getUserInfo({
          success(res) {
            that.globalData.userInfo = res.userInfo;
            // resolve(res.userInfo);
          },
          fail() {
            that.globalData.userInfo = FAIL;
            // console.log('获取用户信息失败');
          }
        });
      }
    },
    fail() {
      that.globalData.userInfo = FAIL;
      // console.log('用户未授权，跳往授权页面');
    }
  })
}

module.exports = getUserInfo;