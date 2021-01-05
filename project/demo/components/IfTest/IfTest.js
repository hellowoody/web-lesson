Component({
  properties: {

  },
  data: {
    flag:true,
    target:10
  },
  methods: {
    toggleshow(){
      this.setData({
        flag : !this.data.flag,
        target: 3
      })
    }
  }
})
