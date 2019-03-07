// pages/appsubmit/appsubmit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    barberList: [{
        timePeriod: '12:00~13:00',
        status: '可预约',
        checked:'true'
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
      },
      {
        timePeriod: '18:00~19:00',
        status: '可预约'
      }, {
        timePeriod: '19:00~20:00',
        status: '可预约'
      }, {
        timePeriod: '20:00~21:00',
        status: '可预约'
      }
    ],

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