import Taro, { Component } from '@tarojs/taro'
import AuthProvider from '../../components/Common/AuthProvider'
import Blank from '../../components/Common/Blank'

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
        <Blank />
      </AuthProvider>
    )
  }
}

