import {glabolUrls} from "urls.js";

const request ={
      //获取影视列表
      getMovieList:function(params){
           
           wx.request({
                url: glabolUrls.moviesUrl,
                data:{
                    count: params.count ? params.count : 0, 
                    type: params.type ? params.type : '',
                    keyword:params.keyword ? params.keyword : '',
                },
                success:function(res){
                    if(params.success){
                        params.success(res.data);
                    }
                }
            })
      },

      //获取单条详细数据
      getDetail:function(params){
           wx.request({
             url: glabolUrls.detailUrl+'id='+params.id,
             success:function(res){
                  if(params.success){
                    params.success(res.data);
                  }
             }
           })
      },

      //获取评论列表
      getCommentList:function(params){
          
          wx.request({
               url: glabolUrls.commentsUrl+'movie_id='+params.movie_id+'&page='+params.page,
               success:function(res){
                    if(params.success){
                      params.success(res);
                    }
               }
          })
      }
   
}


export {request}
