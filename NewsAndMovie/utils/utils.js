function http(url, data, callback) {
  wx.request({
    url: url,
    data: data,
    header: { 'content-type': 'application/xml' },
    success: res => {
      callback(res.data)
    }
  })
}
module.exports = {http}