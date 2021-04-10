import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/home/index',
      'pages/recommend/index',
      'pages/techservice/index',
      'pages/community/index',
      'pages/message/index',
      'pages/mine/index',
      'pages/standard/index',
      'pages/standard/search',
      'pages/standard/detail',
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#0c00bf',
      navigationBarTitleText: '综合科技服务平台门户',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#8a8a8a',
      selectedColor: '#0c00bf',
      backgroundColor: '#ffffff',
      borderStyle: 'black',
      list: [{
        selectedIconPath: 'assets/tabbar/home-active.png',
        iconPath: 'assets/tabbar/home.png',
        pagePath: 'pages/home/index',
        text: '首页'
      },
      {
        selectedIconPath: 'assets/tabbar/recommend-active.png',
        iconPath: 'assets/tabbar/recommend.png',
        pagePath: 'pages/recommend/index',
        text: '热门推荐',
      },
      {
        selectedIconPath: 'assets/tabbar/techservice-active.png',
        iconPath: 'assets/tabbar/techservice.png',
        pagePath: 'pages/techservice/index',
        text: '科技服务',
      },
      {
        selectedIconPath: 'assets/tabbar/message-active.png',
        iconPath: 'assets/tabbar/message.png',
        pagePath: 'pages/message/index',
        text: '消息中心',
      },
      {
        selectedIconPath: 'assets/tabbar/mine-active.png',
        iconPath: 'assets/tabbar/mine.png',
        pagePath: 'pages/mine/index',
        text: '我的',
      }
      ]
    },
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
        <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
