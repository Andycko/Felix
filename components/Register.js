import React from 'react';
import {
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Image,
  ToastAndroid,
  AsyncStorage
} from 'react-native';
import styles from '../styles/Style';
import { Font } from 'expo';

export class Register extends React.Component {
  
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
    this.state = {name: null,
                  newestID: null};
  }

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

        <View style={[styles.wrap, styles.left]}>
          <StatusBar hidden/>
          <Text style={[styles.heading, styles.headReg]}>How should{'\n'}I call You</Text>

          <View style={styles.rectangle}></View>
            
          <View style={styles.inputWrap}>  
            <TextInput 
              style= {styles.inputName}
              placeholder= 'Your name here'
              onChangeText= {(name) => this.setState({name})}
              autoGrow = 'false'
            />
          </View>

          <Image source = {require('../img/felix-2.png')} style={styles.felix2} />          
          <TouchableOpacity 
            style={[styles.go]} 
            onPress={() => this.pressed(this.state.name)}>
          <Text style={[styles.heading, styles.goHeading]}>GO</Text>
          <Text style={[styles.heading, styles.goHeading, styles.orange, styles.specialRot]}>GO</Text>
          </TouchableOpacity>
        </View>

        ) : null
        //if font is not loaded, render will return null
      }
      </View>
    );

  }

  addName = async (text) => {
    try {
      await AsyncStorage.setItem('userToken', text);
    } catch (error) {
      // Error saving data
    }
  }
  
  pressed(text){
    if(text != null){
      var space = text.indexOf(" ");
    }else{
      var space = -1
    }

    if(text && text.length >= 2 && space == -1){
    // checking if there is input and whether it is longer than 2 chars
      this.addName(text);
      // adding the name to AsynchStorage
      this.props.navigation.navigate('Home');
      // navigating to next screen - Home
    } else {
      ToastAndroid.show('Please provide me with\nat least two characters!', ToastAndroid.SHORT);
    }
  }


}
export default Register;