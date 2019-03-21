// components/news-item-template/news-item-template.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    newsList:{type:Array}
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toMusicTap:function(e){
      let newsId = e.currentTarget.dataset.newsId;
      wx.navigateTo({
        url: '/pages/news/news-detail/news-detail?id='+newsId,
      })
    }
  },

 
})
