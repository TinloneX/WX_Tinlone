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
  }
})