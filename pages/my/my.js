// pages/my/my.js
const Cloud = require('../../utils/av-weapp-min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    role: "用户",
    name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
    

    // var query = new Cloud.Query('Roles');
    // query.find().then(function(res) {
    //     var arr = [];
    //     var Len = res.length;
    //     for (var i = 0; i < Len; i++) {
    //       arr.push(res[i].attributes);
    //       console.log(arr[i]['name'])
    //     }
    //   }, function(error) {
    //     console.log('获取失败')
    //   }),

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  // 将不需要刷新的数据放在onLoad中，将需要刷新的数据放在onShow中
  onShow: function() {
    var that = this;
    wx.getStorage({
      key: 'login',
      success: function (res) {
        that.setData({
          name: res.data
        })
        // console.log(res.data)
      },
    })
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

  },
  login: function() {
    wx.navigateTo({
      url: '../login/login',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  barber1:function(){
      wx.navigateTo({
        url: '../barberapo/barberapo',
      })
  },
  barber2: function () {
    wx.navigateTo({
      url: '../barbersl/barbersl',
    })
  },
  barber3: function () {
    wx.navigateTo({
      url: '../schedule/schedule',
    })
  },
  log: function() {
    wx.navigateTo({
      url: '../logi/logi',
    })
  }
})