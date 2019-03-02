import React from 'react';
import { AsyncStorage, View } from 'react-native';
import { Navigator, NavigatorNew } from './components/Navigator';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {user: null}
  }
  
  isSigned = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    return userToken;
  }

  componentDidMount(){
    this.isSigned()
      .then(res => this.setState({user: res}))
  }

  render() {
    if(this.state.user != null) { 
      return <NavigatorNew />
    }else{
      return <Navigator />
    }
  }
}

