import React from 'react';
import { AsyncStorage, View } from 'react-native';
import { Navigator, NavigatorNew } from './components/Navigator';

export default class App extends React.Component {
  /**
   * @method constructor
   * is called at the creation of this class
   * 
   * @function isSigned
   * is a function used to check wheter there is a user already loged in or not
   * 
   * @method componentDidMount
   * is called after the App component is mounted
   */

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

