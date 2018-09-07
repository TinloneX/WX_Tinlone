// pages/coverview/coverview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  play: function(e) {
    this.videoCtx.play()
  },

  pause: function(e) {
    this.videoCtx.pause()
  },

   /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoCtx = wx.createVideoContext('myVideo')
  }
})