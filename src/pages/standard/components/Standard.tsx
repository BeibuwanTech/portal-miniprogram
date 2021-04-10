import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtCard, AtActivityIndicator, AtTag, AtButton } from 'taro-ui'

interface Standard {
    _id: string,
    name: string,
    category: string,
    status: string,
    title: string,
    dutyDepartment: string,
    implementationDate: string,
    ccs: string
}

const Index = (props) => {
    const [standards, setStandards] = useState<Standard[]>([
        { _id: '1', name: 'GB 26488-2011', title: '镁合金压铸安全生产规范', category: '国家标准', ccs: 'H61', status: '现行', dutyDepartment: '中国有色金属工业协会', implementationDate: '2012-05-01' },
        { _id: '2', name: 'GB 38508-2020', title: '清洗剂挥发性有机化合物含量限值', category: '国家标准', ccs: 'G85', status: '现行', dutyDepartment: '工业和信息化部', implementationDate: '2020-12-01' },
        { _id: '3', name: 'GB 7247.1-2012', title: '激光产品的安全 第1部分：设备分类、要求', category: '国家标准', ccs: 'L51', status: '现行', dutyDepartment: '中国机械工业联合会', implementationDate: '2012-12-31' },
        { _id: '4', name: 'GB 31241-2014', title: '	便携式电子产品用锂离子电池和电池组 安全要求', category: '国家标准', ccs: 'K82', status: '现行', dutyDepartment: '工业和信息化部（电子）', implementationDate: '2014-12-05' },
        { _id: '5', name: 'GB 5226.6-2014', title: '机械电气安全 机械电气设备 第6部分：建设机械技术条件', category: '国家标准', ccs: 'J09', status: '现行', dutyDepartment: '中国机械工业联合会', implementationDate: '2015-06-29' },
    ])
    const [type, setType] = useState<string>()

    return (
        <View className='StandardComponent'>
            <View className='tabcontent-wrap'>
                {
                    standards.map((item) => {
                        return <AtCard
                            key={item._id}
                            className='standard-card'
                            extra={item.category}
                            title={`标准号: ${item.name}`}
                        >
                            <View className='card-content'>
                                <View><View className='title'>标准名称：</View>{item.title}</View>
                                <View><View className='title'>标准分类号：</View>{item.ccs}</View>
                                <View><View className='title'>标准状态：</View>{item.status}</View>
                                <View><View className='title'>主管部门：</View>{item.dutyDepartment}</View>
                                <View><View className='title'>实施日期：</View>{item.implementationDate}</View>
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