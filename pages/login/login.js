// pages/login/login.js
const Cloud = require('../../utils/av-weapp-min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logid:"",
    sex:"",
    password:"",
    idFlag:"false",
    idFlag2:"false",
    sexFlag:"false",
    passwordFlag:"false"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //点击radio-group中的列表项事件
  radioChange: function (res) {
    // console.log("选中的标签：" + res.detail.value);
    // var arrs = this.data.classes_array;
    var that = this;
    that.sex = res.detail.value;
    that.setData({
      sex:that.sex  
     })
    // console.log(that.data.sex)
  },
  logName: function (e) {
    this.setData({
      logid: e.detail.value
    })
  },
  
  logPassword: function (e) {
    var that = this
    this.setData({
      password: e.detail.value
    })
  },

  submit:function(){
    var that = this;
    // 校验昵称是否符合规范
    var logid = that.data.logid;
    if (logid.length>12||logid.length<3){
      wx.showModal({
        title: '提醒',
        content: '昵称长度为3-12位',
        success: function (res) {
        }   
      })
    }

    else {
      that.setData({
        idFlag: true
      })
      // console.log(that.data.passwordFlag)
    }
    // console.log(that.data.sex)
    // console.log(that.data.password)
    // 检验性别是否已经选择
    var sex = that.data.sex;
    if (sex){
      that.setData({
        sexFlag:true
      })
    }
    var query = new Cloud.Query('UsersInfor');
    query.find().then(function (res) {
      var arr = [];
      var Len = res.length;
      for (var i = 0; i < Len; i++) {
        arr.push(res[i].attributes);
        // console.log(arr[i]['useId'])
        if (that.data.logid == arr[i]['userId']) {
          wx.showModal({
            title: '提醒',
            content: '该昵称已经被注册，请重新输入',
            success: function (res) {
              that.setData({
                idFlag2: false
              })
            }
          })
        }
        else {
          that.setData({
            idFlag2: true
          })
          // console.log(that.data.passwordFlag)
        }

      }
    }, function (error) {
      console.log('获取失败')
    })
    // 校验密码是否符合规范
    var password = that.data.password;
    if (password.length > 12 || password.length < 6 || !(/^\w+$/).test(password)){
      wx.showModal({
        title: '提醒',
        content: '密码需要为6-12位的字母数字或者下划线组成，请重新输入',
        success: function (res) {
        }
      })
    }
    else{
      that.setData({
        passwordFlag:true
      })
      // console.log(that.data.passwordFlag)
    }

    if(that.data.idFlag==true&&that.data.sexFlag==true&&that.data.passwordFlag==true&&that.data.idFlag2==true){
      var Users = Cloud.Object.extend('UsersInfor');
      var users = new Users()
      users.set('userId',that.data.logid)
      users.set('sex',that.data.sex)
      users.set('password',that.data.password)
      users.save().then(function (users) {
        // 成功保存之后，执行其他逻辑.
        console.log('New object created with objectId: ' + users.id);
      }, function (error) {
        // 异常处理
        console.error('Failed to create new object, with error message: ' + error.message);
      });
      wx.switchTab({
        url: '../my/my',
      })
    }
  }
})