const bmap = require("../libs/bmap-wx.min.js");
function getCity(that){
  wx.getLocation({
    type: 'wgs84',
    success: function (res) {
      const BMap = new bmap.BMapWX({
        ak: 'znbm6sGyP1UDRZdDQ78ZBjmzW3WoLRlG'
      });

      let latitude = res.latitude;
      let longitude = res.longitude;
      
      BMap.regeocoding({
        location: latitude + ',' + longitude,
        fail: function (res) {
          wx.showToast({
            title: '请检查位置服务是否开启',
          })
        },
        success: function (res) {
          console.log(res)
          let city = res.originalData.result.addressComponent.city;
          that.setData({
            currentCity: city
          });
        }
      });
    },
    fail: function () {
      wx.showToast({
        title: '城市定位失败',
      })
    }
  });
};

module.exports = {
  getCity: getCity
}
