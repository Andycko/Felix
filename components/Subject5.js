import React from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ViewPagerAndroid,
  Image
} from 'react-native';
import styles from '../styles/Style';
import { Font, SQLite } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';


class Bold extends React.Component {
  render(){
    return(
      <Text style={{fontFamily: 'raleway-medium'}}>{this.props.content}</Text>
    )
  }
}

class UList extends React.Component {
  render(){
    return(
      <Text style={{fontSize: hp('2.5%')}}><Text style={{fontSize: hp('3%')}}>{'\u2022'} </Text>{this.props.content}</Text>
    )
  }
}

export class Subject5 extends React.Component {
  
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
    this.state = {learning: true,
                  toPage: 1, 
                  wrongPressed: [false, false, false, false, false, false, false, false],
                  goodPressed: [false, false, false, false, false],
                  answered: false,
                  goodAnswer: 0
                };
  }

  defaultState() {
    this.setState({learning: true,
                  toPage: 1,
                  wrongPressed: [false, false, false, false, false, false, false, false],
                  goodPressed: [false, false, false, false, false],
                  answered: false,
                  goodAnswer: 0
                })
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

          <Text style={[styles.heading, styles.headSub]}>How WPA works?</Text>
          <View style={styles.rectangleSub}></View>
          <ScrollView contentContainerStyle={styles.scrollText} showsVerticalScrollIndicator={false} style={[styles.wrapSub]}>
            {this.state.learning ?
            <View>
              <Text style={[styles.textSub]}>
                <Text style={[styles.curricHeading]}>WPA{'\n'}{'\n'}</Text>
                <Bold content='WPA, or Wi-Fi Protected Access'/>, was developed as “WEP’s replacement.” 
                There are two versions of Wi-Fi Protected Access: <Bold content='WPA and WPA2'/>. The original WPA standard was 
                intended as a temporary replacement for WEP while the 802.11i (WPA2) standard was being developed. Because of 
                the way WPA works, it was able to run on most existing wireless cards and access points through a simple firmware update.{'\n'}{'\n'}

                <Text style={[styles.curricHeading]}>TKIP{'\n'}{'\n'}</Text>
                The technology that allows WPA to work on existing hardware is <Bold content='TKIP (Temporal Key Integrity Protocol)'/>. 
                We won’t go too deeply into the details of how TKIP works, but you should understand the basics. 
                <Bold content='TKIP still uses the RC4 algorithm'/> to encrypt data, which is one of the reasons TKIP can run on existing hardware. 
                TKIP encrypts every packet with its own unique encryption key, which is still based on the root key (the pre-shared WEP key). 
                Essentially, TKIP is performing a more secure version of what WEP was intended to do using a root WEP key and a “unique” IV for every packet. 
                TKIP also provides a “re-keying mechanism,” which is where it gets its name (because the encryption keys are only “temporary”).{'\n'}{'\n'}

                WPA is implemented in two basic ways:{'\n'}{'\n'}

                <UList content='WPA-PSK (Pre-Shared Key)'/>{'\n'}
                <UList content='WPA-Enterprise'/>{'\n'}{'\n'}

                <Text style={[styles.curricHeading]}>WPA-PSK{'\n'}{'\n'}</Text>
                With <Bold content='WPA-PSK (Pre-Shared Key)'/>, also sometimes referred to as <Bold content='WPA-Personal'/>, you assign 
                a key that is shared among all devices that wish to join the wireless network. Operationally, this is identical to creating 
                and distributing the WEP key. However, <Bold content='the key is now 256 bits'/> in length. This is clearly intended for 
                <Bold content='home or small-office'/> solutions, yet it is very widely deployed even in enterprises.{'\n'}{'\n'}

                <Text style={[styles.curricHeading]}>WPA-Enterprise{'\n'}{'\n'}</Text>
                <Bold content='WPA-Enterprise'/> is much more complicated to configure compared to WPA-PSK. It requires additional servers on the backend to 
                perform authentication of each individual user (typically this would be a RADIUS server). Although WPA-Enterprise is more 
                complicated to configure initially, it is much easier to administer for larger organizations and 
                <Bold content='provides a better layer of security.'/>{'\n'}{'\n'}
                
                Remember the example from the last chapter of the WEP key that is shared among all users in an organization? If you have 100 users 
                and one of those users leaves the company, you now have to change the WEP key and replace it on 99 systems. 
                With WPA-Enterprise, this is no longer an issue. Because <Bold content='every user has his or her own unique authentication credentials'/>, 
                if one user leaves the company, you simply disable that user’s account.{'\n'}{'\n'}

                <Text style={[styles.curricHeading]}>WPA2 Encryption Algorithms{'\n'}{'\n'}</Text>
                WPA2 still supports the TKIP encryption algorithm but has also introduced a new, more secure option that’s typically referred 
                to as <Bold content='CCMP or AES'/>. <Bold content='Counter Mode with Cipher Block Chaining Message Authentication Code Protocol (CCMP)'/>
                uses the much more secure and vetted AES encryption algorithm. <Bold content='AES, the Advanced Encryption Standard'/>, has been around for many 
                years and has withstood the test of time. <Bold content='Whenever possible, you should be configuring your access points and clients to 
                use the WPA2 CCMP algorithm.'/>{'\n'}{'\n'}

                In the figure, you can see that WPA2 encompasses all the WPA technologies.{'\n'}{'\n'}
              </Text>

              <Image source = {require('../img/WPA2.png')} style={[styles.inlineImg]}/>

              <TouchableOpacity style={[styles.testBtn]} onPress={() => {this.setState({learning: false})}}>
                <Text style={[styles.titleTestBtn]}>Test yourself</Text>
              </TouchableOpacity>
            </View>
            :
            <View style={[styles.center]}>
              {
                (this.state.toPage <= 5) ? 
                
                <View style={[styles.testHead]}>           
                  <TouchableOpacity style={[styles.testHeadBackBtn]} onPress= {() => {this.defaultState()}}>
                    <Ionicons name="md-arrow-back" size={40} color="white" />
                  </TouchableOpacity>
                
                  <TouchableOpacity style={[styles.testHeadTitle]}>
                    <Text style={[styles.testHeadTitleText]}>Enjoy!</Text>  
                  </TouchableOpacity>

                  <Text style={[styles.testHeadQuest]}><Text style={[styles.orange]}>{this.state.toPage}</Text>/5</Text>  
                </View> 
                :
                <View style={[styles.testHead]}>           
                  <TouchableOpacity style={[styles.testHeadTitle]}>
                    <Text style={[styles.testHeadTitleText]}>Well done!</Text>  
                  </TouchableOpacity>
                </View> 
              }
                <ViewPagerAndroid style={[styles.pagerView]} initialPage={0} scrollEnabled={false} ref={viewPager => { this.viewPager = viewPager; }}>
                
                <View style={[styles.center, styles.questView]} key="1">  
                  <Text style={[styles.testQuest]}>To start using WPA the networking hardware had to be upgraded.</Text>
                  
                  <TouchableOpacity style={this.state.wrongPressed[0] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>True</Text>
                  </TouchableOpacity>
              
                  <TouchableOpacity style={this.state.goodPressed[0] ? [styles.testQuestBoxRight, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({goodAnswer: this.state.goodAnswer + 1, goodPressed: [true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>False</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={this.state.answered ? [styles.testUniversalBtn] : [styles.testUniversalBtnDisabled]} disabled={!this.state.answered} 
                    onPress={() => {this.scrollToNext(), this.setState({answered: false})}}
                  >
                    <Text style={[styles.testUniversalBtnTitle]}>Next!</Text>
                  </TouchableOpacity>
                </View>
                  
                <View style={[styles.center, styles.questView]}key="2">  
                  <Text style={[styles.testQuest]}>WKIP uses the _ algorithm to encrypt data.</Text>
                  
                  <TouchableOpacity style={this.state.wrongPressed[1] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>AES</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={this.state.wrongPressed[2] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>MD5</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={this.state.wrongPressed[3] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [,,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>SHA</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={this.state.goodPressed[1] ? [styles.testQuestBoxRight, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({goodAnswer: this.state.goodAnswer + 1, goodPressed: [,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>RC4</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={this.state.answered ? [styles.testUniversalBtn] : [styles.testUniversalBtnDisabled]} disabled={!this.state.answered} 
                    onPress={() => {this.scrollToNext(), this.setState({answered: false})}}
                  >  
                    <Text style={[styles.testUniversalBtnTitle]}>Next!</Text>
                  </TouchableOpacity>  
                </View>  
                  
                <View style={[styles.center, styles.questView]}key="3">  
                  <Text style={[styles.testQuest]}>WPA-PSK operates identically to WEP but with a _ key.</Text>
                  
                  <TouchableOpacity style={this.state.wrongPressed[4] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [,,,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>250 bit</Text>
                  </TouchableOpacity>  
                   
                  <TouchableOpacity style={this.state.goodPressed[2] ? [styles.testQuestBoxRight, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({goodAnswer: this.state.goodAnswer + 1, goodPressed: [,,true], answered: true})}}
                    disabled={this.state.answered}
                  >  
                    <Text style={[styles.testAnswear]}>254 bit</Text>
                  </TouchableOpacity>  

                  <TouchableOpacity style={this.state.wrongPressed[5] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [,,,,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>256 bit</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={this.state.answered ? [styles.testUniversalBtn] : [styles.testUniversalBtnDisabled]} disabled={!this.state.answered}
                    onPress={() => {this.scrollToNext(), this.setState({answered: false})}}
                  >
                    <Text style={[styles.testUniversalBtnTitle]}>Next!</Text>
                  </TouchableOpacity>
                </View>

                <View style={[styles.center, styles.questView]}key="4">  
                  <Text style={[styles.testQuest]}>WPA-Enterprise is not very complicated to configure and is a lot more secure than WPA-PSK.</Text>

                  <TouchableOpacity style={this.state.wrongPressed[6] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                  onPress={() => {this.setState({wrongPressed: [,,,,,,true], answered: true})}}
                  disabled={this.state.answered}
                  >
                  <Text style={[styles.testAnswear]}>True</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={this.state.goodPressed[3] ? [styles.testQuestBoxRight, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({goodAnswer: this.state.goodAnswer + 1, goodPressed: [,,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>False</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={this.state.answered ? [styles.testUniversalBtn] : [styles.testUniversalBtnDisabled]} disabled={!this.state.answered}
                    onPress={() => {this.scrollToNext(), this.setState({answered: false})}}
                  >
                    <Text style={[styles.testUniversalBtnTitle]}>Next!</Text>
                  </TouchableOpacity>
                </View>

                <View style={[styles.center, styles.questView]}key="5">  
                  <Text style={[styles.testQuest]}>With the introduction of CCMP & AES, WPA2 does no longer support TKIP.</Text>

                  <TouchableOpacity style={this.state.wrongPressed[7] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [,,,,,,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>True</Text>
                  </TouchableOpacity>
                                    
                  <TouchableOpacity style={this.state.goodPressed[4] ? [styles.testQuestBoxRight, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({goodAnswer: this.state.goodAnswer + 1, goodPressed: [,,,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>False</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={this.state.answered ? [styles.testUniversalBtn] : [styles.testUniversalBtnDisabled]} disabled={!this.state.answered}
                    onPress={() => {this.scrollToNext(), this.setState({answered: false})}}
                  >
                    <Text style={[styles.testUniversalBtnTitle]}>Next!</Text>
                  </TouchableOpacity>
                </View>

                <View style={[styles.center, styles.questView]} key="6">
                {
                  (this.state.goodAnswer == 5) ?
                  <View>
                    
                    <Text style={[styles.goodResponseText]}>You've got <Text style={[styles.orange]}>{this.state.goodAnswer}</Text>/5 answers good!</Text>
                    <Text style={[styles.goodResponseText]}>You are ready to proceed to the next chapter :)</Text>
                    <TouchableOpacity style={[styles.testUniversalBtn]} onPress={() => {this.props.navigation.navigate('Subject5'), this.defaultState()}}>
                      <Text style={[styles.testUniversalBtnTitle]}>=></Text>
                    </TouchableOpacity>
                  </View>
                  :
                  <View>
                    <Text style={[styles.badResponseText]}>You've got <Text style={[styles.orange]}>{this.state.goodAnswer}</Text>/5 answers good!</Text>
                    <Text style={[styles.badResponseText]}>I think you should get back to learning ;)</Text>
                    <TouchableOpacity style={[styles.testUniversalBtn]} onPress={() => {this.defaultState(), console.log(this.state.goodAnswer)}}>
                      <Text style={[styles.testUniversalBtnTitle]}>=></Text>
                    </TouchableOpacity>
                  </View>
                }
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

export default Subject5;