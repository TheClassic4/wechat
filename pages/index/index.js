//index.js
//获取应用实例
const app = getApp()
const Cloud = require('../../utils/av-weapp-min.js');
Page({
  
  data: {
    motto: 'Hello World',
    phone: '18323187501',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    barberList: [{
      name: '王小明',
      times: '66',
      works: '3'
    }, {
      name: '翔太郎',
      times: '50',
      works: '4'
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  
  },
  onShow:function(){
    var query = new Cloud.Query('Roles');
    query.find().then(function(res){
      // console.log(res)
    },function(error){
      console.log('获取失败')
    })
  }
  ,
  tel: function() {
    wx.makePhoneCall({
      phoneNumber: this.data.phone,
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 因为跳转的页面在app.json中是已经注册过的tabBar就要用swicthBar
  gotoA: function() {
    wx.switchTab({
      url: '/pages/appoint/appoint',
    })
  },
  barberInfo: function(e) {
    var that = this
    that.index = e.currentTarget.dataset.index
    that.name = that.data.barberList[that.index].name
    wx.setStorage({
      key: 'barber',
      data: that.name,
    })
    wx.navigateTo({
      url: '../barber/barber',
    })
  },
  submit: function() {
    wx.navigateTo({
      url: '../appsubmit/appsubmit',
    })
  }
})