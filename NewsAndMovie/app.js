App({/* 全局的js文件 ，包含生命周期函数 */
  http(url, data, callback) {
    wx.request({
      url: url,
      data: data,
      header: { 'content-type': 'application/xml' },
      success: res => {
        callback(res.data)
      }
    })
  },
})