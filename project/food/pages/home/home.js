Page({

  data: {
    categroys:[
      {
        id:1,
        name:"全部",
        imgPath:"/assets/imgs/t/Chinese_image.png"
      },
      {
        id:2,
        name:"中餐",
        imgPath:"/assets/imgs/t/Chinese_image.png"
      },
      {
        id:3,
        name:"法餐",
        imgPath:"/assets/imgs/t/French_image.png"
      },
      {
        id:4,
        name:"印餐",
        imgPath:"/assets/imgs/t/Indian_image.png"
      },
      {
        id:5,
        name:"快餐",
        imgPath:"/assets/imgs/t/american_image.png"
      },
      {
        id:6,
        name:"其他",
        imgPath:"/assets/imgs/t/american_image.png"
      },
    ],
    cards:[
      {
        id:1,
        title:"麦辣鸡腿汉堡",
        rating:"5",
        commentNum:10,
        price:"20",
        imgPath:"/assets/imgs/t/list.png",
        ifLike:false
      },
      {
        id:2,
        title:"巨无霸",
        rating:"5",
        commentNum:10,
        price:"25",
        imgPath:"/assets/imgs/t/list1.png",
        ifLike:false
      },
      {
        id:3,
        title:"至尊披萨",
        rating:"5",
        commentNum:10,
        price:"30",
        imgPath:"/assets/imgs/t/list2.png",
        ifLike:false
      },
    ]
  },

  handleCardLike(e){
    const id = e.detail.id;
    const {cards} = this.data;
    // cards.forEach(function(item,i){
    //   if(item.id === id){
    //     item.ifLike = !item.ifLike
    //   }
    // })
    cards.forEach(item => item.id === id ? item.ifLike = !item.ifLike : null)
    this.setData({
      cards
    })
  }
  
})