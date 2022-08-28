Component({
  properties: {
    tabs:{
      type:Array,
      value:[]
    }
  },

  data: {

  },

  methods: {
    changeItem(e){
      // console.log(e.target.dataset.idx)
      this.triggerEvent("tabsItemChange",{
        index:e.target.dataset.idx
      })
    }
  }
})
