// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form_data: '',
  },

  formSubmit: function(e) {
    console.log('数据：', e.detail.value)
    this.setData({
      form_data: JSON.stringify(e.detail.value)
    })
  },

  formReset: function(e) {
    console.log("form reset")
    this.setData({
      form_data: "form reset"
    })
  }
})