import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtCard, AtActivityIndicator, AtTag, AtButton } from 'taro-ui'
import { getTechserviceByType } from '../service'

interface TechService {
    _id: string,
    provider: string,
    category: string,
    img: string,
    title: string,
    tag: string[],
    price: number,
    unit: string,
    sold: number,
    star: number,
    comment: string
}

const Index = (props) => {
    const [techservices, setTechservices] = useState<TechService[]>([])
    const [type, setType] = useState<string>()

    useEffect(() => {
        const fetchData = async () => {
            const res = await getTechserviceByType(props.type) as TechService[]
            setTechservices(res)
            setType(props.type)
        }
        if (props.type && props.type != type) fetchData()
    }, [props.type])

    return (
        <View className='TechServiceComponent'>
            <View className='tabcontent-wrap'>
                {
                    techservices.map((item) => {
                        return <AtCard
                            key={item._id}
                            className='service-card'
                            extra={item.category}
                            title={item.provider}
                        >
                            <View className='card-content'>
                                <View className='card-left'>
                                    <Image src={item.img} className='img'></Image>
                                    <AtButton type='primary' size='small'>免费咨询</AtButton>
                                </View>
                                <View className='detail'>
                                    <View className='title'>{item.title}</View>
                                    {
                                        item.tag.length > 0 ? <View className='tag-wrap'>
                                            {item.tag.map((tag => {
                                                return <AtTag key={tag} size='small' active={true} className='tag'>{tag}</AtTag>
                                            }))}
                                        </View> : null
                                    }
                                    <View className='price-wrap'>
                                        <View className='price'>¥{item.price}</View>
                                        <View className='unit'>/{item.unit}</View>
                                        <View className='sold'>销量{item.sold}</View>
                                        <View className='star'>评分{item.star}</View>
                                    </View>
                                    <View className='comment'>
                                        {item.comment}
                                    </View>
                                </View>
                            </View>
                        </AtCard>
                    })
                }
            </View>
        </View>
    )
}

Index.options = { addGlobalClass: true }

export default Taro.memo(Index, (prevProps, nextProps) => {
    if (prevProps.type == nextProps.type) return true
    else return false
})