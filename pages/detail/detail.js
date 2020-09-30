import {request} from "../../utils/request.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
          wx.showLoading({
            title: '正在加载。。。',
          })
          //获取详情数据
          var that = this;
          request.getDetail({
            id:options.id,
            success:function(data){
              // console.log(data);return false;
              that.setData({
                  detail:data
              });
              wx.hideLoading();
            }
          });
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
       //显示页面的时候滚动到顶部,主要是为了返回上一步时滚动到顶部
       wx.pageScrollTo({
        scrollTop: 0,
      })
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

  }
})