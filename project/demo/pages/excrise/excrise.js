Page({

  data: {
    forFlag:true,
    ifFlag:false
  },

  showComp(e){
    console.log(e)
    switch (e.target.dataset.name) {
      case "for":
        this.setData({
          forFlag:true,
          ifFlag:false
        })
        break;
      case "if":
        this.setData({
          forFlag:false,
          ifFlag:true
        })
        break;
    }
  }
})