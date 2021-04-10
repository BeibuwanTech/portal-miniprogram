import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtSearchBar, AtIcon } from 'taro-ui'

const Index = () => {
    const [search, setSearch] = useState<string>('')

    return (
        <View className='TopFilterComponent'>
            <View className='filter-wrap'>
                <View className='category'>
                    <AtIcon value='chevron-down'></AtIcon>
                    <View className='name'>机械制造</View>
                </View>
                <AtSearchBar className='search' showActionButton actionName='高级检索' value={search} onChange={(search) => { setSearch(search) }}></AtSearchBar>
            </View>
        </View>
    )
}

Index.options = { addGlobalClass: true }

export default Taro.memo(Index, (prevProps, nextProps) => {
    return true
})