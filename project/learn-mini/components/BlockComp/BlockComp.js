Component({
  data: {
    flag:true,
    list:["a","b","c"]
  },

  methods: {
    toggle(){
      this.setData({
        flag:!this.data.flag
      })
    }
  }
})
