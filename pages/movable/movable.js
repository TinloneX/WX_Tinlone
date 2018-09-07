// pages/movable/movable.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    y: 0
  },

  move: function() {
    this.setData({
      x: 30,
      y: 30
    })
  },

  onchange: function(e) {
    console.log(e.detail)
  },

  onScale: function(e) {
    console.log(e.detail)
  }
})