import Taro from '@tarojs/taro'

export const getStandard = async () => {
    const res = await Taro.request({
        url: `${API_TEST}/standard`
    })
    return res.data.result
}

export const getAdByType = async (type: string) => {
    const res = await Taro.request({
        url: `${API_TEST}/ad/${type}`
    })
    return res.data.result
}

export const getTechserviceByType = async (type: string) => {
    const res = await Taro.request({
        url: `${API_TEST}/service/${type}`
    })
    return res.data.result
}