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

export class Welcome extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    fontLoaded: false,
  };

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
          <StatusBar hidden/>
          <Text style={styles.heading}>Hello!</Text>
          <Text style={styles.heading}>I'm <Text style={styles.dif}>Felix</Text></Text>

          <Text style={styles.text}>I'd like to tell you something about wireless security</Text>
          <Image source={require('../img/rect.png')} style={styles.rect} />

          <View style={styles.imgWrap}>
            <Image source = {require('../img/felix-1.png')} style={styles.felix} />
          </View>

          <Image source = {require('../img/circle.png')} style={styles.circle} />
          <TouchableOpacity style={[styles.letsGo]} onPress={ () => this.props.navigation.push('Register')}>
            <Text style={[{textAlign: 'center'},styles.heading]}>Follow{'\n'}me</Text>
          </TouchableOpacity>
        </View>
        ) : null
      }
      </View>
    );

  }
};

export default Welcome;