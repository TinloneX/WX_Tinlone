// pages/text/text.js
var initData = 'this is first line\nthis is second line'
var extraLine = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: initData
  },

  add: function(e) {
    extraLine.push('other line')
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },

  remove: function(e) {
    if (extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
  }
})