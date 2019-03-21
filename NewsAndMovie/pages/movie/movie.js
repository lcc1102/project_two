
// let app = getApp();
let utils = require('../../utils/utils.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
url:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2541662397.jpg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取跨域数据
    /*
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      data:{
        city:'广州',
        start:0,
        count:3
      },
      header: {
        'content-type': 'application/xml'
      },
      success:res=>{
        this.setData({
          "in_theaters":res.data
        })
      }
    })
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/coming_soon',
      data: {
        city: '广州',
        start: 0,
        count: 3
      },
      header: {
        'content-type': 'application/xml'
      },
      success: res => {
        this.setData({
          "coming_soon": res.data
        })
      }
    })
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250',
      data: {
        city: '广州',
        start: 0,
        count: 3
      },
      header: {
        'content-type': 'application/xml'
      },
      success: res => {
        console.log(res.data)
        this.setData({
          "top250": res.data
        })
      }
    })
    */
    utils.http("https://douban.uieee.com/v2/movie/in_theaters", {start:0,count:6}, data => {
      this.setData({
        "in_theaters": data
      })
    })
    utils.http("https://douban.uieee.com/v2/movie/coming_soon", {start: 0, count: 6 }, data => {
      this.setData({
        "coming_soon": data
      })
    })
    utils.http("https://douban.uieee.com/v2/movie/top250", {start: 0, count: 6 },data=>{
        this.setData({
          "top250": data
        })
    })
  
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