import { View } from '@tarojs/components'
import Taro, { Component, Config } from '@tarojs/taro'
import { AtSearchBar, AtTabs, AtTabsPane } from 'taro-ui'
import AuthProvider from '../../components/Common/AuthProvider'
import Standard from './components/Standard'

import './component.scss'
import TopFilter from './components/TopFilter'

export default class Index extends Component<{}, {
  user: { name?: string },
  search: string,
  current: number,
  tabList: { title: string }[]
}> {

  config: Config = {
    navigationBarTitleText: '标准快速查询服务',
  }

  constructor(props) {
    super(props)
    this.state = {
      user: {},
      search: '',
      current: 0,
      tabList: [{ title: '首页' }, { title: '国家标准' }, { title: '行业标准' }, { title: '地方标准' }, { title: '团体标准' }, { title: '其他' }],
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  render() {

    const { search, current, tabList } = this.state


    return (
      <AuthProvider setUser={(user) => { this.setState({ user }) }}>
        <View style={{ background: '#f2f2f2', height: '100vh' }}>
          <TopFilter />
          
          <View style={{ height: '20rpx' }}></View>
          <AtTabs current={current} scroll tabList={tabList} onClick={(current) => { this.setState({ current }) }}>
            {
              tabList.map((tab, index) => {
                return <AtTabsPane key={tab.title} current={current} index={index}>
                  <Standard type={tabList[index].title}></Standard>
                </AtTabsPane>
              })
            }
          </AtTabs>
        </View>
      </AuthProvider>
    )
  }
}

