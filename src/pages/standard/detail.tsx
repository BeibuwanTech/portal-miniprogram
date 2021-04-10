import { View } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import { AtCard } from 'taro-ui'
import AuthProvider from '../../components/Common/AuthProvider'

import './index.scss'

export default class Index extends Component<{}, { user: { name?: string } }> {

  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  render() {

    return (
      <AuthProvider setUser={(user) => { this.setState({ user }) }}>
        <View style={{ background: '#f2f2f2', height: '100vh' }}>
          <AtCard
            className='standard-card'
            extra={`国标`}
            title={`标准号: GB 5226.6-2014`}
          >
            <View className='card-content'>
              <View><View className='title'>标准名称：</View>机械电气安全 机械电气设备 第6部分：建设机械技术条件</View>
              <View><View className='title'>标准分类号：</View>J09</View>
              <View><View className='title'>标准状态：</View>现行</View>
              <View><View className='title'>主管部门：</View>中国机械工业联合会</View>
              <View><View className='title'>实施日期：</View>2015-06-29</View>
            </View>
          </AtCard>
        </View>
        {/* <Blank /> */}
      </AuthProvider>
    )
  }
}

