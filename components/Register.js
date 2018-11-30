import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import styles from '../styles/Style';
import { Font } from 'expo';

export class Register extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    fontLoaded: false,
  };

  handleOnPress(){
    alert('pressed');
  }

  async componentDidMount() {
    await Font.loadAsync({
      'raleway-black': require('../assets/fonts/Raleway-Black.ttf'),
      'raleway-extrabold': require('../assets/fonts/Raleway-ExtraBold.ttf'),
      'raleway-bold': require('../assets/fonts/Raleway-Bold.ttf'),
      'raleway-semibold': require('../assets/fonts/Raleway-SemiBold.ttf'),
      'raleway-medium': require('../assets/fonts/Raleway-Medium.ttf'),
      'raleway-regular': require('../assets/fonts/Raleway-Regular.ttf'),
      'raleway-light': require('../assets/fonts/Raleway-Light.ttf'),
      'raleway-thin': require('../assets/fonts/Raleway-Thin.ttf'),
    });

    this.setState({fontLoaded: true });
  }
  render() {

    return (
      <View style={styles.container}>
      {
        this.state.fontLoaded ? (
        <View style={styles.wrap}>
          <Text>Ahoj</Text>
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Welcome')}
            ><Text>Go to Welcome screen</Text>
          </TouchableOpacity>
        </View>
        ) : null
      }
      </View>
    );

  }
};

export default Register;