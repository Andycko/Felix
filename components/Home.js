import React from 'react';
import {
  Text,
  View,
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
    this.state = {name: null};
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
      // selecting existing user name
        'SELECT name FROM user WHERE id = ?',
        [1],
        // if succesfully selected, get the array of objects, stringify it, pick just the first object and convert it to String
        // !!! still left with "Name" not Name !!!
        (txn, res) => this.setState({ name: JSON.stringify(Object.values(res.rows._array[0]).toString()) }),
        () => console.log("nemmegy baratom")
      );
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
          <Text style={[styles.heading, styles.headReg]}>Hello {this.state.name}!</Text>
        </View>

        ) : null
        //if font is not loaded, render will return null
      }
      </View>
    );

  }

};

export default Home;