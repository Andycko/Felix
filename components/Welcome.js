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
    // disabling header of navigation between screens
  };

  state = {
    fontLoaded: false,
    // inicialing font load state - false
  };

  async componentDidMount() {
    await Font.loadAsync({
    // loading font from files
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
    // if get to this point, font is loaded -> set state to true
  }

  render() {
    return (
      <View style={styles.container}>
      {
        this.state.fontLoaded ? (
        // check if font is loaded (depending on the state)

        <View style={styles.wrap}>
          <StatusBar hidden/>
          <Text style={styles.heading}>Hello!</Text>
          <Text style={styles.heading}>I'm <Text style={styles.dif}>Felix</Text></Text>

          <Text style={styles.text}>I'd like to tell you something about wireless security</Text>
          <View style={styles.rectangleWelcome}></View>

          <Image source = {require('../img/felix-1.png')} style={styles.felix} />
          
          <TouchableOpacity style={[styles.letsGo]} onPress={ () => this.props.navigation.navigate('Register')}>
            <Text style={[styles.heading, styles.letsGoHeading]}>Follow{'\n'}me</Text>
            <View style={styles.circleWelcome}></View>
          </TouchableOpacity>
        </View>

        ) : null
        //if font is not loaded, render will return null
      }
      </View>
    );

  }
};

export default Welcome;