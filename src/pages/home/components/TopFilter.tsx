import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtSearchBar, AtIcon } from 'taro-ui'

const Index = () => {
    const [search, setSearch] = useState<string>('')

    return (
        <View className='TopFilterComponent'>
            <View className='filter-wrap'>
                <View className='city'>
                    <AtIcon value='map-pin'></AtIcon>
                    <View className='name'>海口</View>
                </View>
                <AtSearchBar className='search' customStyle={{ background: '#0c00bf' }} value={search} onChange={(search) => { setSearch(search) }}></AtSearchBar>
            </View>
        </View>
    )
}

Index.options = { addGlobalClass: true }

export default Taro.memo(Index, (prevProps, nextProps) => {
    return true
})