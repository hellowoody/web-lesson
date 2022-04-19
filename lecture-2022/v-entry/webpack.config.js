export default {
  // js执行入口文件
  // entry:  [ './src/home.js','./src/about.js'],
  entry:{
    home:"./src/home.js",
    about:"./src/about.js",
  },
  // entry:{
  //   home:{
  //     import:"./src/home.js",
  //     filename:"pages/home.js"
  //   },
  //   about:"./src/about.js"
  // }
  // entry:() => {
  //   return {
  //       home:"./src/home.js",
  //       about:"./src/about.js"
  //   }
  // }

  // entry:() => {
  //   return Promise.resolve({
  //     home:"./src/home.js",
  //     about:"./src/about.js"
  //   })
  // }
};