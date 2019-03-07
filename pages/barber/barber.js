// pages/barber/barber.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    barberList: [{
        timePeriod: '12:00~13:00',
        status: '可预约'
      },
      {
        timePeriod: '13:00~14:00',
        status: '已满'
      },
      {
        timePeriod: '14:00~15:00',
        status: '可预约'
      },
      {
        timePeriod: '15:00~16:00',
        status: '可预约'
      },
      {
        timePeriod: '16:00~17:00',
        status: '已满'
      },
      {
        timePeriod: '17:00~18:00',
        status: '已满'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 这是因为this作用域指向问题 ，success函数实际是一个闭包 ， 无法直接通过this来setData,需要用一个var that = this
  onLoad: function(options) {
    var that = this
    wx.getStorage({
      key: 'barber',
      success: function (res) {
      that.setData({
        name:res.data
      })
      },
    })
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

  },
  submit: function() {
    wx.navigateTo({
      url: '../appsubmit/appsubmit',
    })
  }
})