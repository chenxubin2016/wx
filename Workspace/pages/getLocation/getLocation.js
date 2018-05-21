// const bmap = require("../../libs/bmap-wx.min.js");
const util = require("../../utils/util.js");
Page({
  /**
     * 页面的初始数据
     */
  data: {
    currentCity: '北京市'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    util.getCity(this);

    // wx.getNetworkType({
    //   success: function(res) {
    //     console.log(res);
    //     wx.showToast({
    //       title: res.networkType,
    //     })
    //   },
    // });
    // wx.showModal({
    //   title: '温馨提示！',
    //   content: '您确定要关闭吗？',
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    // wx.showActionSheet({
    //   itemList: ["1","2","3"],
    //   success:function(res){
    //     console.log(res)
    //   }
    // }),
    // wx.setNavigationBarTitle({
    //   title: '666',
    // }),
    wx.setTopBarText({
      text: 'hello, world',
    })
    
  },
  linkto:function(){
    wx.navigateTo({
      url: '../../pages/index/index',
    })
  }
})