let newsData = require("../../../data/news-data.js")

Page({
  /**页面的初始数据*/
  data: {

  },
  /**生命周期函数--监听页面加载*/
  onLoad: function (options) {
    let id = options.id;
    let newsDetail = newsData.newsList[id];
    this.setData({
      news:newsDetail,
      newsId:id
    })
    /* **************缓存数据存储*************** */
    // 获取缓存数据，如果没有缓存数据，则保存一次
    this.newsCollected = wx.getStorageSync("newsCollected");
    if (!this.newsCollected){
      // 当页面中没有缓存时，创建新的缓存数据
      this.newsCollected = {}
      this.newsCollected[id] = false;
      wx.setStorageSync("newsCollected", this.newsCollected)
    } else if (!this.newsCollected[id]) {
      // 当缓存数据没有指定的key的时候，在缓存数据中存储指定key的缺省值
      this.newsCollected[id] = false;
      wx.setStorageSync("newsCollected", this.newsCollected)
    } else {
      // 当一切不可能都排除之后
      let newsItemCollected = this.newsCollected[id]
      this.setData({
        collected: newsItemCollected
      })
    }
  },
  // 点击收藏
  onCollectionTap(){
    this.setData({
      collected: !this.data.collected
    });
    wx.showToast({
      title: this.data.collected?'收藏成功':'取消收藏',
      icon: this.data.collected ?'success':'none',
      duration: 1000,
      mask:true
    });
    // 获取缓存数据
    this.newsCollected = wx.getStorageSync("newsCollected");
    // 修改缓存数据
    this.newsCollected[this.data.newsId] = this.data.collected
    // 存入缓存数据
    wx.setStorageSync("newsCollected", this.newsCollected)
  },
  onShareTap(){
    wx.showActionSheet({
      itemList: ['分享到微信好友', '分享到朋友圈', '分享到QQ','分享到微博'],
      itemColor:"#abc",
      success(res) {
        switch(res.tapIndex){
          case 0:console.log("分享到微信好友");break;
          case 1: console.log("分享到朋友圈"); break;
          case 2: console.log("分享到QQ"); break;
          case 3: console.log("分享到微博"); break;
        }
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: this.data.news.title,
      path: '/pages/news/news-detail/news-detail?id=' + this.data.newsId
    }
  }
})