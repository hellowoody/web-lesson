Component({
  properties: {
    tabs:{
      type:Array,
      value:[]
    }
  },
  methods: {
    changeTab(e){
      // console.log("index:",e.target.dataset.index)
      this.triggerEvent("tabsItemChange",{
        index:e.target.dataset.index
      })
    }
  }
})
