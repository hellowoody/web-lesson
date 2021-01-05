Page({

  data: {
    showTarget:"block",
  },

  showComp(e){
    // console.log(e)
    this.setData({
      showTarget : e.target.dataset.name
    })
  }
})