// components/movies-group/movies-group.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{type:Object},
    title:{type:String,default:null}
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
    onMoreTap(e) {
      wx.navigateTo({
        url: '/pages/movie/movie-more/movie-more?title='+this.properties.title,
      })
    },
  }
})
