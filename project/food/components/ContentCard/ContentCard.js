
Component({

  properties: {
    item:Object
  },

  data: {},

  methods: {
    like(e){
      // console.log(e.target.dataset.id)
      this.triggerEvent("CardLike",{
        id:e.target.dataset.id
      })
    },
    goto(){
      wx.navigateTo({
        url: '/pages/foodDetail/foodDetail',
      })
    }
  }
})
