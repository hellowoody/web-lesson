Component({
  properties:{
    icon_class:{
      type:String,
      value:"iconfont icon-aixin"
    },
    name:{
      type:String,
      value:"默认菜单名称"
    },
    url:String
  },
  methods:{
    goto(){
      wx.navigateTo({
        url: this.data.url,
      })
    }
  }
})