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
import { AndroidBackHandler } from 'react-navigation-backhandler';

/**
 * @class Bold
 * this is a custom component for getting bold text,
 * was created because there are loads of bolded words in the curriculums
 * 
 * @class Subject
 * @method constructor
 * inicialize props and state, state contains important variables, which are changing the current look of the app
 * 
 * @function defaultState
 * this function is used to change all the state object to its default values
 * 
 * @function onBackButtonPressAndroid 
 * this function modifies the action that is called when the back button on Android is pressed
 * 
 * @function scrollToNext
 * this function is called when the button at the end of each chapter is pressed and it scrolls to the next chapter
 * 
 * @method componentDidMount
 * loads all the fonts
 */

class Bold extends React.Component {
  render(){
    return(
      <Text style={{fontFamily: 'raleway-medium'}}>{this.props.content}</Text>
    )
  }
}

export class Subject2 extends React.Component {
  
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
                  goodPressed: [false, false, false, false],
                  answered: false,
                  goodAnswer: 0
                };
  }

  defaultState() {
    this.setState({learning: true,
                  toPage: 1,
                  wrongPressed: [false, false, false, false, false, false, false, false, false, false],
                  goodPressed: [false, false, false, false],
                  answered: false,
                  goodAnswer: 0
                })
  }

  onBackButtonPressAndroid = () => {
    this.props.navigation.popToTop()
    return true
  }

  scrollToNext(){
    const page = this.state.toPage;

    this.setState({toPage: page + 1});
    this.viewPager.setPage(page);
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
          
          <Text style={[styles.heading, styles.headSub]}>IEEE Standards</Text>
          <View style={styles.rectangleSub}></View>
          <ScrollView contentContainerStyle={styles.scrollText} showsVerticalScrollIndicator={false} style={[styles.wrapSub]}>
            {this.state.learning ?
            <View>
              <Text style={[styles.textSub]}>
                <Text style={[styles.curricHeading]}>802.11a/b/g/n{'\n'}{'\n'}</Text>
                802.11 is the name for the working group from the <Bold content='Institute of Electrical and Electronic Engineers (IEEE)'/> 
                for wireless local area networks. IEEE working groups are essentially committees of experts who define 
                standards of operation for specific technologies so that manufacturers can build 
                standards that can interoperate.{'\n'}{'\n'}

                <Bold content='The IEEE identifies each standard with a letter'/>. For example, 802.11a is different from 802.11b. 
                Although there are some commonalities between technologies, there are also differences, 
                as well as advantages and disadvantages to choosing one technology over the other. 
                For the most part, the <Bold content='differences between standards are in speed, modulation techniques, 
                and whether they are backward compatible and a security technique that works 
                for one will work for the others'/>.{'\n'}{'\n'}

                However, keep in mind that some specific tools will only work for a specific standard. 
                For example, if a program is written specifically to work with 802.11b, 
                it might not work for 802.11a or even 802.11g. <Bold content='Because the underlying protocols 
                for how data is handled are the same across standards, the attacks and defences 
                in theory will be identical'/>.{'\n'}{'\n'}

                The 802.11 standards prescribe which frequencies these technologies use as well as the channels available to them. 
                For example, the 802.11b standard operates in the 2.4 GHz frequency and might have 1-11 or 1-14 unique working 
                channels depending on the country you live in.{'\n'}{'\n'}
                
              </Text>
              <View style={[styles.table]}>
                <View style={[styles.row,{marginBottom: 10}]}>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemHead]}>Standard</Text></View>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemHead]}>Frequency</Text></View>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemHead]}>Speeds</Text></View>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemHead]}>Interoperates with</Text></View>
                </View>
                <View style={[styles.row]}>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>802.11a</Text></View>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>5 GHz</Text></View>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>54 Mbps</Text></View>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>None</Text></View>
                </View>
                <View style={[styles.row]}>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>802.11b</Text></View>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>2.4 GHz</Text></View>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>11 Mbps</Text></View>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>None</Text></View>
                </View>
                <View style={[styles.row]}>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>802.11g</Text></View>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>2.4 Ghz</Text></View>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>54 Mbps</Text></View>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>802.11b</Text></View>
                </View>
                <View style={[styles.row]}>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>802.11n</Text></View>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>2.4 Ghz/5 Ghz</Text></View>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>100 Mbps and higher</Text></View>
	                  <View style={[styles.rowItem]}><Text style={[styles.rowItemContent]}>802.11b, 802.11g</Text></View>
                </View>
              </View>

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
                  <Text style={[styles.testQuest]}>IEEE identifies standards with a _.</Text>
                  
                  <TouchableOpacity style={this.state.wrongPressed[0] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>Shortcut</Text>
                  </TouchableOpacity>
              
                  <TouchableOpacity style={this.state.wrongPressed[1] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>Phrase</Text>
                  </TouchableOpacity>
              
                  <TouchableOpacity style={this.state.wrongPressed[2] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>Letter</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={this.state.goodPressed[0] ? [styles.testQuestBoxRight, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({goodAnswer: this.state.goodAnswer + 1, goodPressed: [true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>Number</Text>
                  </TouchableOpacity>


                  <TouchableOpacity style={this.state.answered ? [styles.testUniversalBtn] : [styles.testUniversalBtnDisabled]} disabled={!this.state.answered} 
                    onPress={() => {this.scrollToNext(), this.setState({answered: false})}}
                  >
                    <Text style={[styles.testUniversalBtnTitle]}>Next!</Text>
                  </TouchableOpacity>

                </View>

                <View style={[styles.center, styles.questView]}key="2">  
                  <Text style={[styles.testQuest]}>The 802.11 standards operate in 14 channels all over the world.</Text>

                  <TouchableOpacity style={this.state.wrongPressed[3] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [,,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>True</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={this.state.goodPressed[1] ? [styles.testQuestBoxRight, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({goodAnswer: this.state.goodAnswer + 1, goodPressed: [,true], answered: true})}}
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

                <View style={[styles.center, styles.questView]}key="3">  
                  <Text style={[styles.testQuest]}>802.11a operates in the _ frequency.</Text>
 
                  <TouchableOpacity style={this.state.wrongPressed[5] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                  onPress={() => {this.setState({wrongPressed: [,,,,,true], answered: true})}}
                  disabled={this.state.answered}
                  >
                  <Text style={[styles.testAnswear]}>2.4 GHz</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={this.state.goodPressed[2] ? [styles.testQuestBoxRight, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({goodAnswer: this.state.goodAnswer + 1, goodPressed: [,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>5 GHz</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={this.state.wrongPressed[6] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [,,,,,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>2.4 / 5 GHz</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={this.state.answered ? [styles.testUniversalBtn] : [styles.testUniversalBtnDisabled]} disabled={!this.state.answered}
                    onPress={() => {this.scrollToNext(), this.setState({answered: false})}}
                  >
                    <Text style={[styles.testUniversalBtnTitle]}>Next!</Text>
                  </TouchableOpacity>
                </View>

                <View style={[styles.center, styles.questView]}key="4">  
                  <Text style={[styles.testQuest]}>802.11a operates in the _ frequency.</Text>
 
                  <TouchableOpacity style={this.state.wrongPressed[7] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                  onPress={() => {this.setState({wrongPressed: [,,,,,,,true], answered: true})}}
                  disabled={this.state.answered}
                  >
                  <Text style={[styles.testAnswear]}>54 MBps</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={this.state.wrongPressed[8] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                  onPress={() => {this.setState({wrongPressed: [,,,,,,,,true], answered: true})}}
                  disabled={this.state.answered}
                  >
                  <Text style={[styles.testAnswear]}>56 Mbps</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={this.state.goodPressed[3] ? [styles.testQuestBoxRight, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({goodAnswer: this.state.goodAnswer + 1, goodPressed: [,,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>54 Mbps</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={this.state.wrongPressed[9] ? [styles.testQuestBoxWrong, styles.center] : [styles.testQuestBox, styles.center]} 
                    onPress={() => {this.setState({wrongPressed: [,,,,,,,,,true], answered: true})}}
                    disabled={this.state.answered}
                  >
                    <Text style={[styles.testAnswear]}>56 MBps</Text>
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
                  <View style={[styles.answerContainer, styles.center]}>
                    <Text style={[styles.responseText]}>Great job young padavan</Text>
                    <Text style={[styles.responseTextSpecial]}><Text style={[styles.orange]}>{this.state.goodAnswer}</Text>/4</Text>
                    <Text style={[styles.responseText]}>You are now ready to proceed to the Next chapter!</Text>
                    <TouchableOpacity style={[styles.testUniversalBtnSpecial, styles.center]} 
                      onPress={() => {this.props.navigation.navigate('Subject3'), this.defaultState()}}
                    >
                      <Ionicons name="md-arrow-forward" size={40} color="white" />
                    </TouchableOpacity>  
                  </View>
                  :
                  <View style={[styles.answerContainer, styles.center]}>
                    <Text style={[styles.responseText]}>Could be better</Text>
                    <Text style={[styles.responseTextSpecial]}><Text style={[styles.orange]}>{this.state.goodAnswer}</Text>/4</Text>
                    <Text style={[styles.responseText]}>You should go review this chapter once more!</Text>
                    <TouchableOpacity style={[styles.testUniversalBtnSpecial, styles.center]}
                     onPress={() => {this.defaultState()}}
                    >
                      <Ionicons name="md-arrow-forward" size={40} color="white" />
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
};

export default Subject2;