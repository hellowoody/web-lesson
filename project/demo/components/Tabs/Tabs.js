// components/Tabs/Tabs.js
Component({

  properties: {
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
    activeIndex : 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeTab(e){
      // console.log(e)
      let {tabs} = this.data
      tabs.forEach((item,index) => index===e.target.dataset.index-1 ? item.isActive = true : item.isActive = false
      )
      this.setData({
        activeIndex : e.target.dataset.index,
        tabs
      })
    }
  }
})
