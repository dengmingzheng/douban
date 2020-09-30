import {request} from "../../utils/request.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[],
    histories:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       var that = this;
       //获取搜索缓存
       wx.getStorage({
         key: 'searchRecord',
         success:function(res){
            that.setData({
              histories:res.data
            });
         }
       })
  },
  
  //搜索事件
  onSearchEvent:function(event){
       var value = event.detail.value;
       var that = this;

       //回退的时候，如果是空了不应该再发起网络请求
       if(!value || value === null){
          return false;
       }
       request.getMovieList({
         keyword:value,
         success:function(data){
          
              if(data){
                 that.setData({
                   items:data
                 });
              }
         }
       });
  },

  //点击单个跳转到详情页事件
  onItemTapEvent:function(evnet){
      console.log(evnet);
      console.log('----------');
      var that = this;
      var id = evnet.currentTarget.dataset.id;
      var title = evnet.currentTarget.dataset.title;
      console.log(id);
      var isExisted = false;
      //获取搜索缓存
      var histories = that.data.histories;

      //判断搜索的记录是否存在缓存中，如果存在则不设置缓存
      if(histories){
        for(var index=0;index <= histories.length;index++){
          if(histories[index].id === id){
             isExisted = true;
             break;
          }
        }
      }

      //优化可以单个设置，避免重复设置缓存
      if(!isExisted){
        //搜索记录添加到缓存中 
        histories.push({id:id,title:title});

        //设置搜索缓存
        wx.setStorage({
          data:histories,
          key: 'searchRecord',
          success:function(){
            console.log('缓存保存成功');
          }
        });
      }
      
      //跳转到详情页
      wx.navigateTo({
        url: "/pages/detail/detail?id="+id
      })
  },

  //清除缓存
  onClearEvent:function(event){
        wx.removeStorage({
          key: 'searchRecord',
          success:function(){
            console.log('缓存删除成功');
          }
        })

        //清除data的数据
        this.setData({
          histories:[]
        });
  }
})