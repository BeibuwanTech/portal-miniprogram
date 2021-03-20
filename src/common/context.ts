import Taro from '@tarojs/taro'

export type AppContextType = {
    user: { name?: string },
    setAppContextValue?: (appContextValue: AppContextType) => void,
}

const appContextValue: AppContextType = { user: {} }

export const AppContext = Taro.createContext(appContextValue)