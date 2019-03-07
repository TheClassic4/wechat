// pages/logi/logi.js
const Cloud = require('../../utils/av-weapp-min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logsid: '',
    password: '',
    name:''
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

  },
  logsId: function(e) {
    this.setData({
      logsid: e.detail.value
    })
  },
  logsPassword: function(e) {
    var that = this
    this.setData({
      password: e.detail.value
    })
  },
  confirm: function() {
    var query = new Cloud.Query('Roles');
    var that = this;
    query.find().then(function(res) {
      var arr = [];
      var Len = res.length;
      for (var i = 0; i < Len; i++) {
        arr.push(res[i].attributes);
        // console.log(that.data.logsid);
        // console.log(arr[i]['userId'])
        if(that.data.logsid == arr[i]['userId'] && that.data.password == arr[i]['password']){
          that.name = arr[i]['name']
          that.setData({
           name:that.name
          }),
            wx.setStorage({
              key: 'login',
              data: that.name
            }),
  
          wx.showModal({
            title: '提醒',
            content: '登录成功',
            success: function (res) {
              wx.switchTab({
                url: '../my/my',
              })
            }
          })
     
      
      
       

          
        }
        // else 
        // wx.showModal({
        //   title: '提醒',
        //   content: '登录失败，请检查账号或者密码',
        //   success: function (res) {
        //     that.setData({
              
        //     })
        //   }
        // })
      }
    }
    ,
     function(error) {
      console.log('获取失败')
    }
    )
// 注意这里不能用navigateTo
    // if (that.data.name == '理发师' || that.data.name == '管理员' || that.data.name == '用户'){
  

  // }
  }
})