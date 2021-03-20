import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

const Index = () => {
    const [city] = useState<{ name: string }>({ name: '海口' })
    const { statusBarHeight } = Taro.getSystemInfoSync()
    const { top, height, left } = Taro.getMenuButtonBoundingClientRect()
    const navigationBarHeight = (top - statusBarHeight) * 2 + height

    return (
        <View>
            <View style={{
                width: '100vw',
                height: `${navigationBarHeight + statusBarHeight}px`,
                background: '#78A4FA',
                position: 'fixed',
                zIndex: 999,
            }}>
                <View style={{
                    width: '100vw',
                    height: `${statusBarHeight}px`
                }} />
                <View style={{
                    height: `${navigationBarHeight}px`,
                    display: 'flex',
                    alignItems: 'center',
                    paddingRight: `calc(100vw - ${left}px)`
                }}>
                    <View style={{
                        width: `calc(100vw - ${left}px)`,
                        height: `${navigationBarHeight}px`,
                    }}>
                        <View style={{
                            height: `${navigationBarHeight}px`,
                            paddingLeft: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#F2F2F2',
                            fontWeight: 'lighter',
                            whiteSpace: 'nowrap'
                        }}>
                            <AtIcon value='map-pin' customStyle={{ fontSize: '20px' }} color='#F2F2F2' />
                            <View>
                                {city.name}
                            </View>
                        </View>
                    </View>
                    <View style={{
                        flexGrow: 1,
                        height: `${navigationBarHeight}px`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden'
                    }}>
                        <View style={{
                            color: '#F2F2F2',
                            fontWeight: 'bold',
                        }}>
                            综合科技服务平台
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                width: '100vw',
                height: `${navigationBarHeight + statusBarHeight}px`
            }} />
        </View>
    )
}

export default Index