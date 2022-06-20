Component({
  data: {
    flag:true,
    arr:[1,2,3,4,5]
  },

  methods: {
    toggle(){
      this.setData({
        flag:!this.data.flag
      })
    }
  }
})
