// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    facus:false,
    inputValue:''
  },

  changeFacus:function(e){
      this.setData({
        facus:!this.data.facus
      })
  },

  bindKeyInput:function(e){
      this.setData({
        inputValue:e.detail.value
      })
  },

  bindReplaceInput:function(e){
    var value = e.detail.value
    var pos = e.detail.cursor
    if(pos != -1){
      var left = e.detail.value.slice(0,pos)
      pos = left.replace(/11/g,'2').length
    }
    return{
      value: value.replace(/11/g, '2'),
      cursor:pos
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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