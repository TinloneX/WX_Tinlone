// pages/swipper/swipper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  changeDots:function(){
    this.setData({
      indicatorDots:!this.data.indicatorDots
    })
  },

  changeAutoPlay:function(){
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange:function(e){
    this.setData({
      interval: e.detail.value
    })
  },
  intervalDuration:function(e){
    this.setData({
      duration: e.detail.value
    })
  }
})