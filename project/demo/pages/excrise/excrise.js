Page({

  data: {
    showTarget:"slot",
  },

  showComp(e){
    // console.log(e)
    this.setData({
      showTarget : e.target.dataset.name
    })
  }
})