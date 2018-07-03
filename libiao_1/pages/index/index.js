//index.js
const app = getApp()

//图片轮播和指示点的颜色与当前选中的指示点颜色
// Page({
//   data: {
//     imgUrls: [
//       '../../image/yinxiang_001.gif',
//       '../../image/yinxiang_002.gif',
//       '../../image/yinxiang_003.gif'
//     ],
//     indicatorDots: true,
//     autoplay: true,
//     interval: 2000,
//     duration: 500,
//     beforeColor: "white",//指示点颜色
//     afterColor: "black"//当前选中的指示点颜色
//   }
// })

//以下是改变图片轮播的指示点样式方法
Page({
  data: {
    textXilie:[
      {textXi: 'BOB系列'},
      {textXi: 'MELODLOUS系列'},
      {textXi: '家庭影院' },
      {textXi: '工程案例' }
    ],
    imgr: [
      { url: '../../image/yin_1_01.gif' },
      { url: '../../image/yin_1_02.gif' },
      { url: '../../image/yin_1_03.gif' },
      { url: '../../image/yin_1_04.gif' }
    ],
    imgs: [
      { url: '../../image/yinxiang_001.gif' },
      { url: '../../image/yinxiang_002.gif' },
      { url: '../../image/yinxiang_003.gif' }
    ],
    currentSwiper: 0, //当前所在滑块的 index
    autoplay: true, //是否自动切换
    interval: 2000  
  },
  //事件方法
  swiperChange: function (e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  }
}) 