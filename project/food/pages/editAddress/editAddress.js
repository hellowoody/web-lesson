Page({

  data: {
    name:"",
    userBase:{
      name:"",
      tel:"",
      address:""
    }
  },

  inputHandle(e){
    this.setData({
      userBase:{
        ...this.data.userBase,
        [e.currentTarget.dataset.key]:e.detail.value,
      }
    })
  },

  updateUserBase(){
    console.log(this.data.userBase)
  }
  
})