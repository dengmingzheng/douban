import {request} from "../../utils/request.js";

//获取应用实例
const app = getApp()

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
     var that = this;
   
     //获取电影列表
     request.getMovieList({
          type:'movies',
          count:7,
          success:res => {
            that.setData({
              movies:res
            });
          }
     });

     //获取电视列表
     request.getMovieList({
          type:'tvs',
          count:7,
          success:res => {
            that.setData({
              tvs:res
            });
          }
     });

     //获取综艺列表
     request.getMovieList({
          type:'shows',
          count:7,
          success:data =>{
            that.setData({
              shows:data
            });
          }
     });
     
     //获取动漫列表
     request.getMovieList({
          type:'comics',
          count:7,
          success:data => {
            that.setData({
              comics:data
            });
          }
     });

     //获取短片列表
     request.getMovieList({
          type:'shorts',
          count:7,
          success:data => {
            that.setData({
              shorts:data
            });
          }
     });

     //获取纪录片列表
     request.getMovieList({
          type:'records',
          count:7,
          success:data => {
            that.setData({
              records:data
            });
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

})
