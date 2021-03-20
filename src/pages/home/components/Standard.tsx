import Taro, { useEffect, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtGrid } from 'taro-ui'
import { getStandard } from '../service'

interface Standard { image: string, url: string }

const Index = () => {
    const [standards, setStandards] = useState<Standard[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await getStandard() as Standard[]
            setStandards(res)
        }
        fetchData()
    }, [])

    return (
        <View className='StandardComponent'>
            {
                standards.length > 0 ?
                    <View className='standard-wrap'>
                        <View className='arrow-wrap'>
                            <View className='arrow'></View>
                        </View>
                        <View className='standard'>
                            <View className='title-wrap'>
                                <View className='title'>国家标准数据库</View>
                                <View className='extra'>2021年2月11日更新</View>
                            </View>
                            <View className='content'>
                                <AtGrid mode='rect' data={standards} />
                            </View>
                        </View>
                    </View> : null
            }
        </View>
    )
}

Index.options = { addGlobalClass: true }

export default Taro.memo(Index, (prevProps, nextProps) => {
    return true
})