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

export class Subject3 extends React.Component {
  
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
                  wrongPressed: [false, false, false, false, false, false, false],
                  goodPressed: [false, false, false, false],
                  answered: false,
                  goodAnswer: 0
                };
  }

  defaultState() {
    this.setState({learning: true,
                  toPage: 1,
                  wrongPressed: [false, false, false, false, false, false, false],
                  goodPressed: [false, false, false, false],
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

          <Text style={[styles.heading, styles.headSub]}>Encryption</Text>
          <View style={styles.rectangleSub}></View>
          <ScrollView contentContainerStyle={styles.scrollText} showsVerticalScrollIndicator={false} style={[styles.wrapSub]}>
            {this.state.learning ?
            <View>
              <Text style={[styles.textSub]}>
                <Bold content='Encryption'/> is the process of obscuring data so that any unauthorized person who 
                intercepts the data won’t be able to understand it. Encryption would be relatively 
                meaningless without being able to return the “jumbled” data to its original form. 
                Thus, <Bold content='encryption is a two-way process'/>. Taking encrypted data and returning it to readable 
                data is called <Bold content='decryption'/>. There are two main systems for encrypting data:{'\n'}{'\n'}

                <UList content='Shared-key encryption'/>{'\n'}
                <UList content='Public Key encryption'/>{'\n'}{'\n'}

                <Text style={[styles.curricHeading]}>Shared Key encryption{'\n'}{'\n'}</Text>
                <Bold content='Shared-key encryption'/> is an extremely old technique for encrypting data, 
                as it has been used since the time of the Romans. Shared-key encryption uses the <Bold content='same key 
                to both encrypt and decrypt data'/> and is therefore sometimes referred to as <Bold content='symmetric encryption'/>. 
                You’re already familiar with WEP encryption, which uses a shared-key encryption technology. 
                You enter an encryption key on the access point and then enter the same encryption key on any clients 
                that need access to the network.{'\n'}{'\n'}

                <Text style={[styles.curricHeading]}>Public Key Infrastructure{'\n'}{'\n'}</Text>
                <Bold content='Public Key encryption'/> (also sometimes referred to as <Bold content='asymmetric encryption'/>) uses 
                a <Bold content='separate key to encrypt and decrypt data'/>. This can be a little confusing to people new to PKI, 
                but just understand that some pretty heavy-duty mathematics are used behind the scenes. This is considered a 
                <Bold content='very strong option for encrypting data'/>. The following table lists the general advantages for each technique:{'\n'}{'\n'}

              </Text>

              <View style={[styles.table]}>
                <View style={[styles.row,{marginBottom: 10}]}>
                    <View style={[styles.rowItem]}><Text style={[styles.rowItemHead]}>Technology</Text></View>
                    <View style={[styles.rowItem]}><Text style={[styles.rowItemHead]}>Advantages</Text></View>
                </View>
                <View style={[styles.row]}>
                    <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>Shared Key</Text></View>
                    <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>Fast{'\n'}Less computing power needed{'\n'}Very simple</Text></View>
                </View>
                <View style={[styles.row]}>
                    <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>Public Key</Text></View>
                    <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>Extremely secure</Text></View>
                </View>
              </View>

              <Text style={[styles.textSub]}>
              {'\n'}{'\n'}
                <Text style={[styles.curricHeading]}>Stream Ciphers vs. Block Ciphers{'\n'}{'\n'}</Text>
                The two basic methods for encrypting data are stream ciphers and block ciphers. In a <Bold content='stream cipher'/>, the data is 
                typically <Bold content='encrypted one byte at a time and the output cipher text is the same length (or very close) as the input plaintext.'/>
                In a <Bold content='block cipher, the encryption algorithm works on blocks of data of a fixed length'/>. 
                For example, if an encryption algorithm works on blocks of data that are 32 bytes, a plaintext message of 128 bytes 
                would be split into four unique blocks of cipher text.{'\n'}{'\n'}

              </Text>
              <TouchableOpacity style={[styles.testBtn]} onPress={() => {this.setState({learning: false})}}>
                <Text style={[styles.titleTestBtn]}>Test yourself</Text>
              </TouchableOpacity>
            </View>
            :
            <View style={[styles.center]}>
              {
                (this.state.toPage <= 4) ? 
                
                <View style={[styles.testHead]}>           
                  <TouchableOpacity style={[styles.testHeadBackBtn]} onPress= {() => {this.defaultState()}}>
                    <Ionicons name="md-arrow-back" size={40} color="white" />
                  </TouchableOpacity>
                
                  <TouchableOpacity style={[styles.testHeadTitle]}>
                    <Text style={[styles.testHeadTitleText]}>Enjoy!</Text>  
                  </TouchableOpacity>

                  <Text style={[styles.testHeadQuest]}><Text style={[styles.orange]}>{this.state.toPage}</Text>/4</Text>  
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
                  <Text style={[styles.testQuest]}>Encryption is a one-way process of obscuring data to prevent it from unauthorized access.</Text>
                  
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
                  <Text style={[styles.testQuest]}>The two main systems for encrypting data are _ _ encryption.</Text>
                  
                  <TouchableOpacity style={this.state.wrongPressed[1] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                  onPress={() => {this.setState({wrongPressed: [,true], answered: true})}}
                  disabled={this.state.answered}
                  >  
                  <Text style={[styles.testAnswear]}>Shared-key & Private key</Text>
                  </TouchableOpacity>  
                  
                  <TouchableOpacity style={this.state.wrongPressed[2] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                  onPress={() => {this.setState({wrongPressed: [,,true], answered: true})}}
                  disabled={this.state.answered}
                  >  
                  <Text style={[styles.testAnswear]}>Block Cipher & Public key</Text>
                  </TouchableOpacity>  
                  
                  <TouchableOpacity style={this.state.goodPressed[1] ? [styles.testQuestBoxRight, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({goodAnswer: this.state.goodAnswer + 1, goodPressed: [,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>Shared-key & Public key</Text>
                  </TouchableOpacity>
                                    
                  <TouchableOpacity style={this.state.answered ? [styles.testUniversalBtn] : [styles.testUniversalBtnDisabled]} disabled={!this.state.answered} 
                    onPress={() => {this.scrollToNext(), this.setState({answered: false})}}
                  >
                    <Text style={[styles.testUniversalBtnTitle]}>Next!</Text>
                  </TouchableOpacity>
                </View>

                <View style={[styles.center, styles.questView]}key="3">  
                  <Text style={[styles.testQuest]}>The advantage of PKI is that it is extremely secure.</Text>
                  
                  <TouchableOpacity style={this.state.goodPressed[2] ? [styles.testQuestBoxRight, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({goodAnswer: this.state.goodAnswer + 1, goodPressed: [,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>True</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={this.state.wrongPressed[3] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                  onPress={() => {this.setState({wrongPressed: [,,,true], answered: true})}}
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
                  <Text style={[styles.testQuest]}>In a block cipher, the encryption alhorithm works with:</Text>
                  
                  <TouchableOpacity style={this.state.wrongPressed[4] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [,,,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>one byte at a time</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={this.state.goodPressed[3] ? [styles.testQuestBoxRight, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({goodAnswer: this.state.goodAnswer + 1, goodPressed: [,,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>blocks of data of a fixed length</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={this.state.wrongPressed[5] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                  onPress={() => {this.setState({wrongPressed: [,,,,,true], answered: true})}}
                  disabled={this.state.answered}
                  >
                  <Text style={[styles.testAnswear]}>one bit at a time</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={this.state.answered ? [styles.testUniversalBtn] : [styles.testUniversalBtnDisabled]} disabled={!this.state.answered}
                    onPress={() => {this.scrollToNext(), this.setState({answered: false})}}
                  >
                    <Text style={[styles.testUniversalBtnTitle]}>Next!</Text>
                  </TouchableOpacity>
                </View>

                <View style={[styles.center, styles.questView]} key="5">
                {
                  (this.state.goodAnswer == 4) ?
                  <View>
                    
                    <Text style={[styles.goodResponseText]}>You've got <Text style={[styles.orange]}>{this.state.goodAnswer}</Text>/4 answers good!</Text>
                    <Text style={[styles.goodResponseText]}>You are ready to proceed to the next chapter :)</Text>
                    <TouchableOpacity style={[styles.testUniversalBtn]} onPress={() => {this.props.navigation.navigate('Subject4'), this.defaultState()}}>
                      <Text style={[styles.testUniversalBtnTitle]}>=></Text>
                    </TouchableOpacity>
                  </View>
                  :
                  <View>
                    <Text style={[styles.badResponseText]}>You've got <Text style={[styles.orange]}>{this.state.goodAnswer}</Text>/4 answers good!</Text>
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

export default Subject3;