import { Checkbox, Input, Radio, View } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import AuthProvider from '../../components/Common/AuthProvider'
import Blank from '../../components/Common/Blank'

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
                    <View className='form'>
                        <View className='formItem'><View className='title'>关键词：</View><Input className='formInput' value='请输入关键词'></Input></View>
                        <View className='formItem'><View className='title'>检索范围：</View>
                            <View className='formRadio'>
                                <Radio value='标题'>标题</Radio>
                                <Radio value='正文' style={{ marginLeft: '20rpx' }}>正文</Radio>
                                <Radio value='标题+正文' style={{ marginLeft: '20rpx' }}>标题+正文</Radio>
                            </View>
                        </View>
                        <View className='formItem'><View className='title'>检索方式：</View>
                            <View className='formRadio'>
                                <Radio value='精确查找'>精确查找</Radio>
                                <Radio value='模糊查询' style={{ marginLeft: '20rpx' }}>模糊查询</Radio>
                            </View>
                        </View>
                        <View className='formItem'><View className='title'>时效性：</View>
                            <View className='formCheckbox'>
                                <Checkbox value='现行'>现行</Checkbox>
                                <Checkbox value='即将实施' style={{ marginLeft: '20rpx' }}>即将实施</Checkbox>
                                <Checkbox value='废止' style={{ marginLeft: '20rpx' }}>废止</Checkbox>
                            </View>
                        </View>
                        {/* <View className='formItem'><View className='title'>标准类型：</View>
                            <View className='formCheckbox'>
                                <Checkbox value='国家标准'>国家标准</Checkbox>
                                <Checkbox value='行业标准' style={{ marginLeft: '20rpx' }}>行业标准</Checkbox>
                                <Checkbox value='地方标准' style={{ marginLeft: '20rpx' }}>地方标准</Checkbox>
                                <Checkbox value='团体标准' style={{ marginLeft: '20rpx' }}>团体标准</Checkbox>
                                <Checkbox value='企业标准' style={{ marginLeft: '20rpx' }}>企业标准</Checkbox>
                                <Checkbox value='国际标准' style={{ marginLeft: '20rpx' }}>国际标准</Checkbox>
                                <Checkbox value='其它标准' style={{ marginLeft: '20rpx' }}>其它标准</Checkbox>
                            </View>
                        </View> */}
                    </View>
                    <View className='button-wrapper'>
                        <AtButton type='secondary' customStyle={{ width: '45vw' }}>重置</AtButton>
                        <AtButton type='primary' customStyle={{ width: '45vw' }}>查询</AtButton>
                    </View>
                </View>
            </AuthProvider>
        )
    }
}