
Component({
  properties: {},

  data: {
    flag:false
  },

  methods: {
    toggle(){
      this.setData({
        flag:!this.data.flag
      })
    }
  }
})
