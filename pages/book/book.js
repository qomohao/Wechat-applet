// pages/book/book.js
import {$get ,$post} from "../../utils/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 页面接收参数
    params:{},
    listData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("页面接收参数",options);
    this.setData({
      params:options
    })
    console.log(this.data.listData);
    // 获取列表数据
    this.getList();
  },
  // 获取列表数据
  getList: async function () {
    let data = await $get("/jztk/query",this.data.params);
    console.log(data)
    this.setData({
      listData: data.data.result
    })
    console.log(this.data.listData);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})