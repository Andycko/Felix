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
import { Font, SQLite } from 'expo';
const db = SQLite.openDatabase('FelixDB.db')

export class Home extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    fontLoaded: false,
  };

  constructor(props) {
   super(props);
   this.state = {name:''}
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
    
    db.transaction((tx) => {
      tx.executeSql('select * from user'),[],
      (_, { rows: { _array } }) => this.setState({ name: _array[0] })
    });
  }

  
  render() {

    return (
      <View style={styles.container}>
      {
        this.state.fontLoaded ? (

          <View>
            <Text style={styles.heading}>{"Ahoj " + this.state.name}</Text>
          </View>

        ) : null
      }
      </View>
    );

  }
};

export default Home;
