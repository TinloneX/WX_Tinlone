// pages/richtext/richtext.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes: [{
        name: 'h1',
        attrs: {
          style: 'color:black'
        },
        children: [{
          type: 'text',
          text: 'h1标签 :('
        }]
      }, {
        name: 'a',
        attrs: {
          target: '_blank',
          style: 'color:blue',
          href: 'http://www.baidu.com/',
        },
        children: [{
          type: 'text',
          text: '打开Baidu无效果'
        }]
      }, {
        name: 'code',
        attrs: {
          style: 'color:gray'
        },
        children: [{
          type: 'text',
          text: 'system.out.print("Hello World!");'
        }]
      }, {
        name: 'img',
        attrs: {
          src: './../../static/images/play.png'
        }
      }, {
        name: 'ul',
        attrs: {
          style: 'color:red'
        },
        children: [{
          name: 'li',
          children: [{
            type: 'text',
            text: 'li-1'
          }]
        }, {
          name: 'li',
          children: [{
            type: 'text',
            text: 'li-2'
          }]
        }]
      }

    ],
    html: '<div style="border-top:1px solid #ddd;"><p><span>　　这几天，一只通体长着雪白毛发的狐狸，出现在武汉大学校园内的珞珈山上。它时常优雅地在林荫小道上漫步，仙气十足，引得众人纷纷上前围观拍照。</span></p> <p> <span>　　现身武大的白狐狸市民陈先生供图 </span></p>  <p><span>　　这只狐狸并不怕人，相反，它似乎能听懂人们的话语。“过来过来……”发现人们没有恶意时，小狐狸还能与人互动，应声上前来。</span></p>  <p><span>　　9月4日，武汉大学教授陈国恩介绍，前两天，他的一位同事拍下了这只白狐狸，在山中小道上散步的视频，并将视频上传到朋友圈中。</span></p>  <p><span>　　这几天，这段视频被众人疯传，引来大家关注。</span></p>  <p><span>　　这只狐狸并非全身纯白，其又尖又长的大耳朵与毛茸茸的尾巴上，还夹杂生长着灰黑的毛发，这只狐狸见到人时，不躲不避，围观它的人都称赞它可爱。</span></p></div>'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})