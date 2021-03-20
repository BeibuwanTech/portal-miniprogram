import Taro, { Component } from '@tarojs/taro'
import { AppContext, AppContextType } from '../../common/context'

export default class Index extends Component<{ setUser: (user: { name?: string }) => void }, { appContextValue: AppContextType }> {

    constructor(props) {
        super(props)
        this.state = {
            appContextValue: { user: {} }
        }
    }

    componentDidMount() {
        let user = Taro.getStorageSync('User') as { name?: string }
        if (user) { this.props.setUser(user) }
        else {
            console.log('模拟网络请求')
            user = { name: '卢俊星' }
            Taro.setStorageSync('User', user)
        }
        this.props.setUser(user)
        this.setState({ appContextValue: { user } })
    }

    componentDidShow() { }

    componentDidHide() { }

    componentDidCatchError() { }

    render() {
        return (
            <AppContext.Provider value={this.state.appContextValue}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

