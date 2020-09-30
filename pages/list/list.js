
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

       var title = '';
       var that = this;

       if(options.type === 'movies'){
            title='电影';
       }else if(options.type === 'tvs'){
            title='电视剧';
       }else if(options.type === 'shows'){
            title='综艺';
       }else if(options.type === 'comics'){
            title='动漫';
       }else if(options.type === 'shorts'){
            title='短片';
       }else{
            title='纪录片';
       }

       //设置标题名称
       wx.setNavigationBarTitle({
        title: title,
       });

        //设置加载提示
        wx.showLoading({
          title: '正在加载。。。'
        });

        //获取列表数据
        request.getMovieList({
          type:options.type,
          count:'',
          success:function(data){
              
              that.setData({
                  list:data
              });
              
              //隐藏加载提示
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