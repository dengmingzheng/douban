// components/stars/star.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      rate:{
        type:Number,
        value:0,
        observer: function(newVal, oldVal) {
          // 属性值变化时执行
          this.updateRate();
        }
      },
      starWidth:{
        type:Number,
        value:20
      },
      starHeight:{
        type:Number,
        value:20
      },
      fontSize:{
        type:Number,
        value:20
      },
      fontColor:{
        type:String,
        value:'#ccc'
      }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //rate的值改变时执行
    updateRate:function(){
      var rate=this.properties.rate; 
      var intRate = parseInt(rate);
      var lightStar = parseInt(intRate/2);
      var haltStar = parseInt(intRate%2);
      var darkStar = 5-lightStar-haltStar;

      var lightStars = [];
      var haltStars = [];
      var darkStars = [];

      for(var index=1;index<=lightStar;index++){
        lightStars.push(index);
      }

      for(var index=1;index<=haltStar;index++){
        haltStars.push(index);
      }

      for(var index=1;index<=darkStar;index++){
        darkStars.push(index);
      }
      
      var rateText = rate && rate > 0 ? rate.toFixed(1) : '未评分';
      this.setData({
        lightStars:lightStars,
        haltStars:haltStars,
        darkStars:darkStars,
        rateText:rateText
      });
    }
  },
  lifetimes:{
    attached:function(){
        this.updateRate();
    }
  }
})
