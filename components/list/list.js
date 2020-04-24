// components/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propData:{
      type:String,
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
    changeVal(){
      console.log("改变数值");
      this.setData({
        propData:"123"
      })
      this.triggerEvent("changeNewVal","父组件监听到了子组件触发的信息！")
      
    }
  }
})
