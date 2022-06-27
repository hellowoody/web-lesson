import {fetch} from "../../utils/http.js"

const themeMixin = Behavior({
  data: {
      theme: 'light'
  },
  methods: {
      themeChanged(theme) {
          this.setData({
              theme
          })
      }
  }
})

const CustomPage = function (options) {
  return Page(
      Object.assign({}, options, {
          behaviors: [themeMixin].concat(options.behaviors || []),
          onLoad(query) {
              const app = getApp()
              this.themeChanged("light")
              app.watchThemeChange && app.watchThemeChange(this.themeChanged)
              options.onLoad && options.onLoad.call(this, query)
          },
          onUnload() {
              const app = getApp()
              app.unWatchThemeChange && app.unWatchThemeChange(this.themeChanged)
              options.onUnload && options.onUnload.call(this)
          }
      })
  )
}

CustomPage({
  data: {
      countryCodes: ["河西区", "和平区", "河东区", "南开区","河北区"],
      countryCodeIndex: 0,

      countries: ["天津市"],
      countryIndex: 0,

      formData: {
        countryCode:0,
        country:"天津市",
        areaCode:0,
        area:"河西区"
      },
      rules: []
  },

  onLoad(){
    this.initData()
  },

  initData(){
    fetch("/getaddress",{
      tokenId:wx.getStorageSync('tokenId')
    }).then(res => {
      console.log(1999,res)
      this.setData({
        countryCodeIndex: res.data.data.areaCode ,
        countryIndex: res.data.data.countryCode,

        formData: {
          ...res.data.data
        },
      })
    }).catch((reason) => {
      wx.showToast({
        title:reason,
        icon:"none",
        duration:3000
      })
    })
  },

  formInputChange(e) {
      this.setData({
        formData:{
          ...this.data.formData,
          address:e.detail.value
        }
      })
  },
  
  bindCountryCodeChange: function(e){
      console.log('picker country code 发生选择改变，携带值为', e.detail.value);

      this.setData({
          countryCodeIndex: e.detail.value,
          formData:{
            ...this.data.formData,
            areaCode:e.detail.value,
            area:this.data.countryCodes[e.detail.value],
          }
      })
  },
  bindCountryChange: function(e) {
      console.log('picker country 发生选择改变，携带值为', e.detail.value);

      this.setData({
          countryIndex: e.detail.value,
          formData:{
            ...this.data.formData,
            countryCode:e.detail.value,
            country:this.data.countries[e.detail.value],
          }
      })
  },
  submitForm() {
      console.log(this.data.formData)
      fetch("/editaddress",{
        ...this.data.formData,
        tokenId:wx.getStorageSync('tokenId')
      }).then(res => {
        wx.showToast({
          title:res.data.data,
          icon:"none",
          duration:3000
        })
      }).catch((reason) => {
        wx.showToast({
          title:reason,
          icon:"none",
          duration:3000
        })
        
      })
  }
});