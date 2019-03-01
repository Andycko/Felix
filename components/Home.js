import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Image,
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
    this.state = {name: null,
                  newestID: this.props.navigation.state.params.ID};
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
    
  
    await db.transaction(tx => {
      tx.executeSql(
        'SELECT name FROM user WHERE id = ?',
        // selecting existing user name
        [this.state.newestID + 1],
        (txn, res) => [this.setState({ name: JSON.stringify(Object.values(res.rows._array[0]).toString()) }),
                       this.setState({ name: this.state.name.substring(1, this.state.name.length - 1) })],
                      //get the array of objects, stringify it, pick just the first object and convert it to String
        () => console.log("nemmegy baratom")
      );
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