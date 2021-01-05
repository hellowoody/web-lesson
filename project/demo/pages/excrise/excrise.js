Page({

  data: {
    showTarget:"if",
  },

  showComp(e){
    // console.log(e)
    switch (e.target.dataset.name) {
      case "for":
        this.setData({
            showTarget : e.target.dataset.name
        })
        break;
      case "if":
        this.setData({
          showTarget : e.target.dataset.name
        })
        break;
    }
  }
})