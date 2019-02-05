import React from 'react';
import {
  Text,
  View,
  StatusBar,
  Button,
  Modal,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styles from '../styles/Style';
import { Font, SQLite } from 'expo';
const db = SQLite.openDatabase('FelixDB.db')
// opening the database as it has already been created

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
    this.state = {name: this.props.navigation.state.params.name,
                  learning: true};
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
      <View>
      {
        this.state.fontLoaded ? (
        // check if font is loaded (depending on the state)

        <View style={[styles.wrap, styles.wrapSubject, styles.center]}>
          <StatusBar hidden/>

          <Text style={[styles.heading, styles.headSub]}>{this.state.name}</Text>
          <View style={styles.rectangleSub}></View>
          <ScrollView contentContainerStyle={styles.scrollText} showsVerticalScrollIndicator={false} style={[styles.wrapSub]}>
            {this.state.learning ?
            <View>
              <Text style={[styles.textSub]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Molestiae rem praesentium illo aperiam dicta nostrum aliquid odio, 
                omnis necessitatibus amet optio nihil qui dolor saepe?{'\n'}{'\n'}

                Libero nisi illum consequatur dolor voluptatibus debitis inventore cum laboriosam, autem, accusantium quam?
                Incidunt rerum enim eveniet culpa autem praesentium delectus pariatur iure iste aut!{'\n'}{'\n'}

                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Molestiae rem praesentium illo aperiam dicta nostrum aliquid odio, 
                omnis necessitatibus amet optio nihil qui dolor saepe?{'\n'}{'\n'}

                Libero nisi illum consequatur dolor voluptatibus debitis inventore cum laboriosam, autem, accusantium quam?
                Incidunt rerum enim eveniet culpa autem praesentium delectus pariatur iure iste aut!{'\n'}{'\n'}

                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Molestiae rem praesentium illo aperiam dicta nostrum aliquid odio, 
                omnis necessitatibus amet optio nihil qui dolor saepe?{'\n'}{'\n'}

                Libero nisi illum consequatur dolor voluptatibus debitis inventore cum laboriosam, autem, accusantium quam?
                Incidunt rerum enim eveniet culpa autem praesentium delectus pariatur iure iste aut!
              </Text>
              <TouchableOpacity style={[styles.testBtn]} onPress={() => {this.setState({learning: false})}}><Text style={[styles.titleTestBtn]}>Test yourself</Text></TouchableOpacity>
            </View>
            :
            <View>
              <Text>Tu bude test</Text>
            </View>
            }
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