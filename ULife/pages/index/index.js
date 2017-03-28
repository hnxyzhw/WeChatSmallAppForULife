var app = getApp()
Page({
  data:{
    userInfo: {},
    nickName:'',
    userInfoAvatar:'',
    sex:'',
    province:'',
    city:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo: userInfo,
         nickName:userInfo.nickName,
          userInfoAvatar:userInfo.avatarUrl,
          province:userInfo.province,
          city:userInfo.city,
          sex:userInfo.gender
      })
      switch(userInfo.gender){
          case 0:
            that.setData({
            sex:'未知'
            })
          break;
          case 1:
            that.setData({
              sex:'男'
            })
          break;
          case 2:
            that.setData({
              sex:'女'
            })
          break;
        }
    })

    
    // wx.getUserInfo({
    //   success: function(res){
    //     // success
    //     that.setData({
    //       nickName:res.userInfo.nickName,
    //       userInfoAvatar:res.userInfo.avatarUrl,
    //       province:res.userInfo.province,
    //       city:res.userInfo.city
    //     })
        // switch(res.userInfo.gender){
        //   case 0:
        //     that.setData({
        //     sex:'未知'
        //     })
        //   break;
        //   case 1:
        //     that.setData({
        //       sex:'男'
        //     })
        //   break;
        //   case 2:
        //     that.setData({
        //       sex:'女'
        //     })
        //   break;
        // }
    //   },
    //   fail: function() {
    //     // fail
    //     console.log("!!!获取信息失败")
       
    //   },
    //   complete: function() {
    //     // complete
    //     console.log("获取用户信息完成！")
    //   }
    // })

    // var that=this;
    // wx.login({
    //   success: function(res){
    //     // success
    //     that.setData({
    //       nickName:res.userInfo.nickName,
    //       userInfoAvatar:res.userInfo.avatarUrl,
    //       province:res.userInfo.province,
    //       city:res.userInfo.city
    //     })
    //     switch(res.userInfo.gender){
    //       case 0:
    //         that.setData({
    //         sex:'未知'
    //         })
    //       break;
    //       case 1:
    //         that.setData({
    //           sex:'男'
    //         })
    //       break;
    //       case 2:
    //         that.setData({
    //           sex:'女'
    //         })
    //       break;
    //     }
    //   },
    //   fail: function() {
    //     // fail
    //     console.log("!!!登陆失败")
    //   },
    //   complete: function() {
    //     // complete
    //     console.log("!!!登陆成功")
    //   }
    // })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})