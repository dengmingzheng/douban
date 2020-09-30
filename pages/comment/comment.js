import {request} from "../../utils/request.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
     total:0,
     isClickPrePage:true,
     isClickNextPage:false,
     isShowPage:false,
     isLoading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       
       wx.showLoading({
         title: '正在加载。。。',
       })
      
       var that = this;
      
       that.setData({
          title:options.title,
          image_path:options.image_path,
          rate:options.rate,
          id:options.id,
          total:options.total
       });

       //获取评论列表
       request.getCommentList({
          movie_id:options.id,
          page:1,
          success:function(res){
              
              //上一页的设置
              if(res.data.prev_page_url){
                   that.setData({
                    isClickPrePage:false,
                    prev_page_url:res.data.prev_page_url
                   })
              }

              //下一页的设置
              if(res.data.next_page_url){
                that.setData({
                 next_page_url:res.data.next_page_url
                })
              }else{
                that.setData({
                  isClickPrePage:true
                 })
              }

              if(res.data){
                 that.setData({
                   comments:res.data.data,
                   isShowPage:true
                 });
                 //隐藏加载数据提示
                 wx.hideLoading();
              }
          }
       });
       
  },

  //回退到上一页事件
  onBackEvent:function(event){
      wx.navigateBack();
  },

  //点击下一页事件
  onNextPageEvent:function(event){
    var that = this;
    var id = event.target.dataset.id;
    var next_page_url = event.target.dataset.next_page_url;
    var url = next_page_url+"&movie_id="+id;
    
    that.setData({
      isLoading:true
    });
    wx.request({
      url: url,
      success:function(res){
        
        if(!res.data.next_page_url){
           that.setData({
              isClickNextPage:true
           });
        }else{
          that.setData({
            next_page_url:res.data.next_page_url
          });
        }

        if(res.data.prev_page_url){
          that.setData({
            isClickPrePage:false,
            prev_page_url:res.data.prev_page_url
           })
        }

        if(res.data.data){
          that.setData({
            comments:res.data.data,
            isLoading:false
          });
        }
      }
    })
  },

  //点击上一页事件
  onPrevPageEvent:function(event){
    var that = this;
    var id = event.target.dataset.id;
    var prev_page_url = event.target.dataset.prev_page_url;
    var url = prev_page_url+"&movie_id="+id;
    
    that.setData({
      isLoading:true
    });
    
    wx.request({
      url: url,
      success:function(res){
        
        if(res.data.next_page_url){
           that.setData({
            isClickNextPage:false, 
            next_page_url:res.data.next_page_url
           })
        }else{
           that.setData({
            isClickNextPage:true
           })
        }

        if(res.data.prev_page_url){
          that.setData({
            isClickPrePage:false,
            prev_page_url:res.data.prev_page_url
           })
        }else{
          that.setData({
            isClickPrePage:true
           })
        }

        if(res.data.data){
          that.setData({
            comments:res.data.data,
            isLoading:false
          });
        }
      }
    })
  }
 
})