import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import styles from '../styles/Style';
import { Font } from 'expo';

export class Home extends React.Component {
  
  static navigationOptions = {
    header: null
    // disabling header of navigation between screens
  };

  state = {
    fontLoaded: false,
    // inicialing font load state - false
  };

  constructor(props) {
    super(props);
    this.state = {name: null};
    this.loadName();
  }

  loadName = async() => {
    const userToken = await AsyncStorage.getItem('userToken')
        this.setState({name: userToken});
  };
  //Just for debugging purposes
  // deauth = async() => {
  //   await AsyncStorage.clear()
  //   this.props.navigation.navigate("SignedOut");
  // };


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
      <View style={[styles.container]}>
      {
        this.state.fontLoaded ? (
        // check if font is loaded (depending on the state)

        <View style={[styles.wrap, styles.wrapHome, styles.center]}>
          <StatusBar hidden/>
          <Text style={[styles.heading, styles.headHome]} numberOfLines={1}>
            Welcome <Text style={[styles.orange]}>{this.state.name}</Text>
          </Text>

          <View style={[styles.left, styles.subHeadWrap]}>
            <Text style={[styles.subHeading, styles.left]}>Please pick one of these</Text>
          </View>
          
          <View style={[styles.right, styles.subHeadWrap, styles.margBot]}>
            <Text style={[styles.subHeading, styles.right]}>subjects to start learning</Text>
          </View>

          <ScrollView contentContainerStyle={[styles.scrollWrap, styles.center]}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Subject')}>
              <View style={[styles.subjectWrap, styles.subjectWrap1]}>
                <Text style={[styles.subjectText]}>Basic vocabulary</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Subject2')}>
              <View style={[styles.subjectWrap, styles.subjectWrap2]}>
                <Text style={[styles.subjectText]}>IEEE Standards</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Subject3')}>
              <View style={[styles.subjectWrap, styles.subjectWrap1]}>
                <Text style={[styles.subjectText]}>Encryption</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Subject4')}>
              <View style={[styles.subjectWrap, styles.subjectWrap2]}>
                <Text style={[styles.subjectText]}>How WEP works?</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Subject5')}>
              <View style={[styles.subjectWrap, styles.subjectWrap1]}>
                <Text style={[styles.subjectText]}>How WPA works?</Text>
              </View>
            </TouchableOpacity>
            
            {/* Just for debugging purposes*/}
            {/* <TouchableOpacity onPress={() => this.deauth()}>
              <View style={[styles.subjectWrap, styles.subjectWrap1]}>
                <Text style={[styles.subjectText]}>How WPA works?</Text>
              </View>
            </TouchableOpacity> */}

          </ScrollView>
        </View>

        ) : null
        //if font is not loaded, render will return null
      }
      </View>
    );

  }

};

export default Home;