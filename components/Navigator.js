import Welcome from './Welcome';
import Register from './Register';
import Home from './Home';
import Subject from './Subject'
import Subject2 from './Subject2'
import Subject3 from './Subject3'
import Subject4 from './Subject4'
import Subject5 from './Subject5'
import { createStackNavigator, createAppContainer } from 'react-navigation';


const BottomTransition = (index, position, height) => {
  const screenRange = [index - 1, index, index + 1];
  const outputHeight = [height, 0, 0];
  const transition = position.interpolate({
    inputRange: screenRange,
    outputRange: outputHeight,
  });

  return {
    transform: [{ translateY: transition }]
  }
}

const LeftTransition = (index, position, width) => {
  const screenRange = [index - 1, index, index + 1];
  const outputWidth = [width, 0, 0];
  const transition = position.interpolate({
    inputRange: screenRange,
    outputRange: outputWidth,
  });

  return {
    transform: [{ translateX: transition }]
  }
}

const NavigationConfig = () => {
  return{
    screenInterpolator: (sceneProps) => {
      const position = sceneProps.position;
      const scene = sceneProps.scene;
      const index = scene.index;
      const height = sceneProps.layout.initHeight;
      const width = sceneProps.layout.initWidth;

      return LeftTransition(index, position, width);
    }
  }
}


const Nav = createStackNavigator(
// creating a navigator stack
  {
  // assigning names to different components
    Welcome: Welcome,
    Register: Register,
    Home: Home,
    Subject: Subject,
    Subject2: Subject2,
    Subject3: Subject3,
    Subject4: Subject4,
    Subject5: Subject5,
  },
  {
  // "Home screen" / On start - first screen
    initialRouteName: 'Welcome',
    transitionConfig: NavigationConfig,
  }
);

const Navigator = createAppContainer(Nav);
// creating a "element" from navigator, so it can be used in App.js

export default Navigator;