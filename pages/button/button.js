// pages/button/button.js
var types = ['default', 'primary', 'warn']
var pageObject = ({

  /**
   * 页面的初始数据
   */
  data: {
    size: 'default',
    warnSize:'default',
    disabled: false,
    plain: false,
    loading: false
  },

  setDisabled: function(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function(e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function(e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  onGotUserInfo: function(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  },
  changeSize: function(e) {
    console.log(this.data.size)
    this.setData({
      size: this.data.size === 'default' ? 'mini' : 'default'
    })
  }
})
// 闭包  遍历类型，改变对应类型的size值, 例中 warn --> wainSize
for (var i = 0; i < types.length; ++i) {
  (function (type) {
    pageObject[type] = function (e) {
      var key = type + 'Size'
      var changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i])
}

Page(pageObject)