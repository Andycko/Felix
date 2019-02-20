import React from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ViewPagerAndroid
} from 'react-native';
import styles from '../styles/Style';
import { Font, SQLite } from 'expo';

class Bold extends React.Component {
  render(){
    return(
      <Text style={{fontFamily: 'raleway-medium'}}>{this.props.content}</Text>
    )
  }
}

export class Subject4 extends React.Component {
  
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
                  learning: true,
                  toPage: 1,
                  wasPressed: [false, false, false, false, false, false, false]};
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

          <Text style={[styles.heading, styles.headSub]}>Basic Vocabulary4</Text>
          <View style={styles.rectangleSub}></View>
          <ScrollView contentContainerStyle={styles.scrollText} showsVerticalScrollIndicator={false} style={[styles.wrapSub]}>
            {this.state.learning ?
            <View>
              <Text style={[styles.textSub]}>
                <Text style={[styles.curricHeading]}>SSID, BSSID, MAC{'\n'}{'\n'}</Text>
                The <Bold content='SSID'/>, <Bold content='BSSID'/> and <Bold content='ESSID'/> address are all essential unique identifiers for a wireless
                network.{'\n'}
                <Bold content='The Service Set Identifier (SSID)'/> is the human readable name associated with an
                802.11 wireless network. It is often called the wireless “network name” and can be shared
                by multiple access points{'\n'}
                <Bold content='The Basic Service Set Identifier (BSSID)'/> uniquely identifies a
                specific access point and is in the same format as a MAC address; thus, most commonly, it
                is the MAC address of the access point.{'\n'}
                <Bold content='The Extended Service Set Identifier (ESSID)'/> can
                essentially be thought of as a group of BSSIDs that share the same Layer 2 network and
                the same SSID.{'\n'}{'\n'}

                <Text style={[styles.curricHeading]}>Beacons and Broadcasts{'\n'}{'\n'}</Text>
                Access points send out beacons, which are radio broadcasts that advertise the wireless
                settings for a specific BSSID. These settings typically contain the SSID, encryption
                method, and so on.{'\n'}{'\n'}

                <Text style={[styles.curricHeading]}>Associating and Authenticating{'\n'}{'\n'}</Text>
                Association and authentication are performed by clients when they want to join a wireless
                network. Associating to an access point means that your client and the access point have
                “agreed upon” which parameters to use to ensure proper communication. Authentication is
                a way of verifying that you are authorized to connect to the network. There are multiple
                methods of authentication, and authentication happens prior to association.{'\n'}{'\n'}

                <Text style={[styles.curricHeading]}>Encryption{'\n'}{'\n'}</Text>
                Encryption is utilized just as it is in any other technology. It obscures the data so that
                only “authorized” people can view the actual data. You have many different choices for
                encrypting network data; some are new implementations created for wireless technologies,
                and others have been around for a while.
                
              </Text>
              <TouchableOpacity style={[styles.testBtn]} onPress={() => {this.setState({learning: false})}}><Text style={[styles.titleTestBtn]}>Test yourself</Text></TouchableOpacity>
            </View>
            :
            <View style={[styles.center]}>
              <Text style={[styles.testTitle]}>Enjoy!</Text>
              <ViewPagerAndroid style={[styles.pagerView]} initialPage={0} scrollEnabled={false} ref={viewPager => { this.viewPager = viewPager; }}>
                
                <View style={[styles.center, styles.questView]} key="1">  
                  <Text style={[styles.testQuest]}><Text style={[styles.testQuestNum, styles.orange]}>1) </Text>SSID is The __ Identifier?</Text>
                  
                  <TouchableOpacity style={this.state.wasPressed[0] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wasPressed: [true]})}}
                  >
                    <Text style={[styles.testAnswear]}>Secret Service</Text>
                  </TouchableOpacity>
              
                  <TouchableOpacity style={this.state.wasPressed[1] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wasPressed: [,true]})}}
                  >
                    <Text style={[styles.testAnswear]}>Secret Set</Text>
                  </TouchableOpacity>
              
                  <TouchableOpacity style={[styles.testQuestBox, styles.center]} onPress={() => this.scrollToNext()}>
                    <Text style={[styles.testAnswear]}>Service Set</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={this.state.wasPressed[2] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wasPressed: [,,true]})}}
                  >
                    <Text style={[styles.testAnswear]}>Service Secret</Text>
                  </TouchableOpacity>
                </View>

                <View style={[styles.center, styles.questView]}key="2">  
                  <Text style={[styles.testQuest]}><Text style={[styles.testQuestNum, styles.orange]}>2) </Text>Beacons usually contain passwords.</Text>

                  <TouchableOpacity style={this.state.wasPressed[3] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wasPressed: [,,,true]})}}
                  >
                    <Text style={[styles.testAnswear]}>True</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={[styles.testQuestBox, styles.center]} onPress={() => this.scrollToNext()}>
                    <Text style={[styles.testAnswear]}>False</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={this.state.wasPressed[4] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wasPressed: [,,,,true]})}}
                  >
                    <Text style={[styles.testAnswear]}>Sometimes</Text>
                  </TouchableOpacity>
                </View>

                <View style={[styles.center, styles.questView]}key="3">  
                  <Text style={[styles.testQuest]}><Text style={[styles.testQuestNum, styles.orange]}>3) </Text>Authentication happens prior to association.</Text>

                  <TouchableOpacity style={[styles.testQuestBox, styles.center]} onPress={() => this.scrollToNext()}>
                    <Text style={[styles.testAnswear]}>True</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={this.state.wasPressed[5] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wasPressed: [,,,,,true]})}}
                  >
                    <Text style={[styles.testAnswear]}>False</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={this.state.wasPressed[6] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wasPressed: [,,,,,,true]})}}
                  >
                    <Text style={[styles.testAnswear]}>Sometimes</Text>
                  </TouchableOpacity>
                </View>

                <View style={[styles.center, styles.questView]} key="4">
                  <TouchableOpacity style={[styles.testBackBtn]} onPress={() => {this.setState({learning: true})}}>
                    <Text style={[styles.testBackBtnTitle]}>Get back to learning!</Text>
                  </TouchableOpacity>
                </View>
              </ViewPagerAndroid>
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

  scrollToNext(){
    const page = this.state.toPage;

    this.setState({toPage: page + 1});
    this.viewPager.setPage(page);
  }

};

export default Subject4;