import React from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ViewPagerAndroid,
} from 'react-native';
import styles from '../styles/Style';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { AndroidBackHandler } from 'react-navigation-backhandler';

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
    this.state = {learning: true,
                  toPage: 1, 
                  wrongPressed: [false, false, false, false, false, false, false, false, false, false],
                  goodPressed: [false, false, false, false, false],
                  answered: false,
                  goodAnswer: 0
                };
  }

  defaultState() {
    this.setState({learning: true,
                  toPage: 1,
                  wrongPressed: [false, false, false, false, false, false, false, false, false, false],
                  goodPressed: [false, false, false, false, false],
                  answered: false,
                  goodAnswer: 0
                })
  }

  onBackButtonPressAndroid = () => {
    this.props.navigation.popToTop()
    return true
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
      'courier': require('../assets/fonts/courier.ttf')
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
          <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid} />
          
          <Text style={[styles.heading, styles.headSub]}>How WEP works?</Text>
          <View style={styles.rectangleSub}></View>
          <ScrollView contentContainerStyle={styles.scrollText} showsVerticalScrollIndicator={false} style={[styles.wrapSub]}>
            {this.state.learning ?
            <View>
              <Text style={[styles.textSub]}>
                <Text style={[styles.curricHeading]}>WEP{'\n'}{'\n'}</Text>
                <Bold content='Wired Equivalent Privacy (WEP)'/> was part of the original 802.11 wireless standard introduced in 1999. 
                WEP provides encryption at Layer 2 of the OSI model, the MAC or Link layer. WEP utilizes the <Bold content='RC4 encryption algorithm'/> 
                to encrypt data and uses a shared key system. WEP uses either a <Bold content='40 or a 104 bit'/> WEP key to encrypt data. 
                WEP if you don’t already know, has been absolutely unacceptable as a secure encryption algorithm for some time now.{'\n'}{'\n'}

                <Text style={[styles.curricFootNote]}>
                  Most documentation will refer to WEP key lengths as 64-bit and 128-bit options. Technically, 
                  this isn’t as accurate as stating that they’re 40 bit and 104 bit—the other 24 bits come from 
                  a 24-bit value (Initialization Vector) that changes with each packet, which you will learn about shortly. 
                  The main thing is to understand the subtle difference and that in most documentation and configurations, 
                  40 bit is the same as 64 bit and 104 bit is the same as 128 bit.
                </Text>{'\n'}{'\n'}

                <Bold content='WEP keys'/> are configured by administrators and can be either <Bold content='40 or 104 bits'/> in length. 
                When we’re talking about encryption keys, <Bold content='the longer the key, essentially the stronger security.'/> 
                The only real reason to choose 40-bit WEP over 104-bit WEP is that it’s easier to remember because the key is shorter.{'\n'}{'\n'}

                So what does it really mean that WEP “uses” the <Bold content='RC4 algorithm'/> and why is it important? Encryption algorithms 
                are designed by very smart people, and the secure algorithms get tested by many other very smart people. 
                However, encryption algorithms are open to be slightly different based on how someone chooses to implement them. 
                This is why sometimes you’ll hear someone state that an algorithm is secure, but a specific implementation of 
                the algorithm isn’t. This is absolutely the case with WEP and the implementation of RC4.{'\n'}{'\n'}    
                
                RC4 was first designed in 1987 by Ron Rivest of RSA Security. RC4 is still a strong encryption algorithm when 
                implemented in a secure way for many other protocols you’re probably familiar with, including the following:{'\n'}{'\n'}
                
                <UList content='WPA (Wi-Fi Protected Access)'/>{'\n'}
                <UList content='TLS/SSL (Transport Layer Security and Secure Sockets Layer)'/>{'\n'}
                <UList content='Microsoft Point-to-Point Encryption'/>{'\n'}
                <UList content='Remote Desktop Protocol'/>{'\n'}
                <UList content='Some implementations of SSH (Secure Shell)'/>{'\n'}{'\n'}

                WEP requires users to enter a key (password) on the access point and then enter the same key on all devices that 
                wish to access the wireless network; this is the quintessential <Bold content='pre-shared key'/> and is commonly referred to as the 
                <Bold content='WEP key'/>. This key serves as the authentication credentials used to access the wireless network as well as provides the 
                key for the encryption process.{'\n'}{'\n'}

                Because <Bold content='WEP uses the RC4 cipher (a stream cipher) to encrypt data'/>, it is necessary never to use the exact same key to 
                encrypt two separate packets. This is an important concept to grasp to understand one of the major flaws of WEP. 
                To deal with the fact that the key can never be exactly the same, every packet includes a <Bold content='24-bit pseudo-random number'/>  
                called an <Bold content='Initialization Vector (IV)'/> so that the key is never the same for any packet.{'\n'}{'\n'}

                <Text style={[styles.codeText]}>Encryption Key = [Initialization Vector] [WEP-Key]</Text>{'\n'}{'\n'}
                
                For the receiver of the packet to know how to decrypt the packet, he also needs to know the Initialization Vector value. 
                So how do we get this to the receiver? Simple. We send it as a cleartext field as part of each packet.{'\n'}{'\n'}

                Here’s a quick refresher of all the major points of WEP for easy reference:{'\n'}{'\n'}

                <UList content='RC4 algorithm'/>{'\n'}
                <UList content='Stream cipher'/>{'\n'}
                <UList content='Shared secret'/>{'\n'}
                <UList content='40-bit or 104-bit key length'/>{'\n'}
                <UList content='Encryption at Layer 2'/>{'\n'}{'\n'}

              </Text>
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
                  <Text style={[styles.testQuest]}>WEP provides encryption at the _ layer of the OSI model.</Text>
                  
                  <TouchableOpacity style={this.state.wrongPressed[0] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>Application</Text>
                  </TouchableOpacity>
              
                  <TouchableOpacity style={this.state.wrongPressed[1] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>Transport</Text>
                  </TouchableOpacity>
              
                  <TouchableOpacity style={this.state.goodPressed[0] ? [styles.testQuestBoxRight, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({goodAnswer: this.state.goodAnswer + 1, goodPressed: [true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>Link</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={this.state.wrongPressed[2] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>Network</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={this.state.answered ? [styles.testUniversalBtn] : [styles.testUniversalBtnDisabled]} disabled={!this.state.answered} 
                    onPress={() => {this.scrollToNext(), this.setState({answered: false})}}
                  >
                    <Text style={[styles.testUniversalBtnTitle]}>Next!</Text>
                  </TouchableOpacity>

                </View>

                <View style={[styles.center, styles.questView]}key="2">  
                  <Text style={[styles.testQuest]}>WEP utilizes the _ encryption algorithm to encrypt data.</Text>

                  <TouchableOpacity style={this.state.wrongPressed[3] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [,,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>AES</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={this.state.goodPressed[1] ? [styles.testQuestBoxRight, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({goodAnswer: this.state.goodAnswer + 1, goodPressed: [,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>RC4</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={this.state.wrongPressed[4] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [,,,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>MD5</Text>
                  </TouchableOpacity>  
                    
                  <TouchableOpacity style={this.state.wrongPressed[5] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [,,,,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>SHA</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={this.state.answered ? [styles.testUniversalBtn] : [styles.testUniversalBtnDisabled]} disabled={!this.state.answered} 
                    onPress={() => {this.scrollToNext(), this.setState({answered: false})}}
                  >  
                    <Text style={[styles.testUniversalBtnTitle]}>Next!</Text>
                  </TouchableOpacity>  
                </View>  

                <View style={[styles.center, styles.questView]}key="3">  
                  <Text style={[styles.testQuest]}>WEP requires users to enter a key on the access point and then enter the same on all devices that wish to access the wireless network.</Text>

                  <TouchableOpacity style={this.state.goodPressed[2] ? [styles.testQuestBoxRight, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({goodAnswer: this.state.goodAnswer + 1, goodPressed: [,,true], answered: true})}}
                    disabled={this.state.answered}
                  >  
                    <Text style={[styles.testAnswear]}>True</Text>
                  </TouchableOpacity>  

                  <TouchableOpacity style={this.state.wrongPressed[6] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [,,,,,,true], answered: true})}}
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

                <View style={[styles.center, styles.questView]}key="4">  
                  <Text style={[styles.testQuest]}>The RC4 algorithm uses either a _ or a _ bit WEP key.</Text>

                  <TouchableOpacity style={this.state.wrongPressed[7] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                  onPress={() => {this.setState({wrongPressed: [,,,,,,,true], answered: true})}}
                  disabled={this.state.answered}
                  >
                  <Text style={[styles.testAnswear]}>44, 104</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={this.state.goodPressed[3] ? [styles.testQuestBoxRight, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({goodAnswer: this.state.goodAnswer + 1, goodPressed: [,,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>40, 104</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={this.state.wrongPressed[8] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [,,,,,,,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>40, 100</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={this.state.answered ? [styles.testUniversalBtn] : [styles.testUniversalBtnDisabled]} disabled={!this.state.answered}
                    onPress={() => {this.scrollToNext(), this.setState({answered: false})}}
                  >
                    <Text style={[styles.testUniversalBtnTitle]}>Next!</Text>
                  </TouchableOpacity>
                </View>

                <View style={[styles.center, styles.questView]}key="5">  
                  <Text style={[styles.testQuest]}>The Initialization vector is sent as an encrypted field as a part of each packet.</Text>

                  <TouchableOpacity style={this.state.wrongPressed[9] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                  onPress={() => {this.setState({wrongPressed: [,,,,,,,,,true], answered: true})}}
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

export default Subject4;