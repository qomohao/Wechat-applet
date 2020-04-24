//index.js
//获取应用实例
const app = getApp()
 
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
   //页面跳转
   goToPage: function(e) {
    let url = e.currentTarget.dataset.url;
    let params = e.currentTarget.dataset.params;
    console.log(url);
    wx.navigateTo({
      url: params?url+params:url
    })
  },
  // 父组件监听到了子组件触发的信息！
  changeNewVal(v){
    console.log(v);
    wx.showToast({
      title: v.detail,
    }) 
  },
  // 页面相关事件处理函数–监听用户下拉动作
  onPullDownRefresh: function () {
      console.log("下拉动作")
  },
  // 页面上拉触底事件的处理函数
  onReachBottom: function () {
    console.log("上拉动作")
  },
  onLoad: function () {
 
    // wx.showLoading({
    //   title: 'loading...',
    // })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
