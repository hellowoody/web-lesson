Component({
  options:{
    multipleSlots:true
  },
  properties: {
    edit:{
      type:Boolean,
      value:false
    }
  },

  data: {
    searchInput:""
  },

  methods: {
    inputHandle(e){
      // console.log(e.detail.value)
      this.triggerEvent("search",e.detail.value)
    }
  }
})
