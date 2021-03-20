import Taro, { Component } from '@tarojs/taro'
import { WebView } from '@tarojs/components'

interface State {
  url: string
}

export default class Index extends Component<{}, State> {

  constructor(props) {
    super(props)
    this.state = {
      url: 'https://community.beibuwan.tech/',
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { url } = this.state

    return (
      <WebView src={url} />
    )
  }
}