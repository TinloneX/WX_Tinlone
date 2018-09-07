var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    home_list:[
      {
        title:"view",
        router:"../view/view",
      },
      {
        title:"scrollview",
        router:"../scrollview/scrollview",
      },{
        title:"swiper",
        router:"../swipper/swipper",
      },{
        title:"movable-area",
        router:"../movable/movable",
      }, {
        title: "cover-view",
        router: "../coverview/coverview",
      }, {
        title: "icon",
        router: "../icon/icon",
      }, {
        title: "text",
        router: "../text/text",
      }, {
        title: "progress",
        router: "../progress/progress",
      }, {
        title: "button",
        router: "../button/button",
      }, {
        title: "checkbox",
        router: "../checkbox/checkbox",
      }, {
        title: "form",
        router: "../form/form",
      }, {
        title: "rich-text",
        router: "../richtext/richtext",
      }, {
        title: "input",
        router: "../input/input",
      }, {
        title: "label",
        router: "../label/label",
      }, {
        title: "picker",
        router: "../picker/picker",
      }, {
        title: "picker-view",
        router: "../pickerview/pickerview",
      }, {
        title: "slider",
        router: "../slider/slider",
      }, {
        title: "switch",
        router: "../switch/switch",
      }, {
        title: "textarea",
        router: "../textarea/textarea",
      }, {
        title: "audio",
        router: "../audio/audio",
      }
    ]
  },

  onclick:function(options){
    console.log(options.target.dataset.router)
    wx.navigateTo({
      url: options.target.dataset.router
    })
  }
})