import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtGrid, AtIcon, AtTabs, AtTabsPane, AtNoticebar } from 'taro-ui'
import { Menu } from '../../common/constant'
import AuthProvider from '../../components/Common/AuthProvider'
import Standard from './components/Standard'
import TechService from './components/TechService'
import TopFilter from './components/TopFilter'
import { getAdByType } from './service'

import './index.scss'
import './component.scss'

export default class Index extends Component<{}, {
  current: number,
  search: string,
  topAds: { _id: string, img: any, url: string }[],
  middleAds: { _id: string, img: any, url: string }[],
  notice: { title: string; url: string },
  tabList: { title: string }[],
}> {

  constructor(props) {
    super(props)
    this.state = {
      search: '',
      topAds: [],
      middleAds: [],
      current: 0,
      notice: { title: '暂无通知公告', url: '' },
      tabList: [{ title: '为你推荐' }, { title: '研究开发' }, { title: '知识产权' }, { title: '检验检测认证' }, { title: '科技金融' }, { title: '创业孵化' }],
    }
  }

  componentDidMount() { this.initHome() }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  initHome = async () => {
    const topAds = await getAdByType('top')
    this.setState({ topAds })
    const middleAds = await getAdByType('middle')
    this.setState({ middleAds })
  }

  render() {
    const { topAds, middleAds, current, tabList, search, notice } = this.state

    return (
      <AuthProvider setUser={() => { }}>
        <TopFilter />

        <View className='top-swiper'>
          <View className='top-swiper-top' />
          <Swiper
            className='carousel'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay
          >
            {
              topAds.map((item) => {
                return (
                  <SwiperItem className='carousel-item' key={item._id}>
                    <Image className='carousel-item-img' src={item.img} onClick={() => {
                      Taro.navigateTo({
                        url: '' + item.url, // TODO
                      });
                    }}
                    />
                  </SwiperItem>
                )
              })
            }
          </Swiper>
        </View>

        <AtNoticebar
          icon='volume-plus'
          showMore
          single
          moreText='详情'
          onGotoMore={() => {
            Taro.navigateTo({
              url: notice.url, // TODO
            })
          }}
        >
          {notice.title}
        </AtNoticebar>

        <AtGrid
          hasBorder={false}
          columnNum={5}
          data={Menu}
          onClick={(item) => { Taro.navigateTo({ url: item.url }) }}
        />

        <Standard />

        <View className='head-title'>今日推荐</View>
        <View className='middle-swiper'>
          <Swiper
            className='carousel'
            circular
            autoplay
          >
            {
              middleAds.map((item) => {
                return (
                  <SwiperItem className='carousel-item' key={item._id}>
                    <Image className='carousel-item-img' src={item.img} onClick={() => {
                      Taro.navigateTo({
                        url: '' + item.url, // TODO
                      });
                    }}
                    />
                  </SwiperItem>
                )
              })
            }
          </Swiper>
        </View>

        <View className='head-title'>直达入口</View>
        <View className='service-wrap'>
          <View className='service' style={{ background: 'linear-gradient(to right, #0c00bf 0%, #4940cf 100%)' }}>
            <View className='icon'>
              <AtIcon value='edit' size='32' color='#0c00bf'></AtIcon>
            </View>
            <View className='text-wrap'>
              <View className='title'>科技服务入驻</View>
              <View className='subtitle'>加入我们</View>
            </View>
          </View>
          <View className='service' style={{ background: 'linear-gradient(to right, #e93b3d 0%, #ef6c6e 100%)' }}>
            <View className='icon'>
              <AtIcon value='lightning-bolt' size='32' color='#e93b3d'></AtIcon>
            </View>
            <View className='text-wrap'>
              <View className='title'>提交服务需求</View>
              <View className='subtitle'>寻找服务商</View>
            </View>
          </View>
        </View>

        <View className='head-title'>科技服务</View>
        <AtTabs current={current} scroll tabList={tabList} onClick={(current) => { this.setState({ current }) }}>
          {
            tabList.map((tab, index) => {
              return <AtTabsPane key={tab.title} current={current} index={index}>
                <TechService type={tabList[index].title}></TechService>
              </AtTabsPane>
            })
          }
        </AtTabs>
      </AuthProvider>
    )
  }
}