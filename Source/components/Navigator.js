import Welcome from './Welcome';
import Register from './Register';
import Home from './Home';
import Subject from './Subject'
import Subject2 from './Subject2'
import Subject3 from './Subject3'
import Subject4 from './Subject4'
import Subject5 from './Subject5'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

/**
 * @function LeftTransition
 * is used to set the animation after navigating to a new screen
 * 
 * @function NavigationConfig
 * this function gets the "sceneProps" from the device and passes them to the LeftTransition
 * 
 * @constant SignedOut
 * a stack navigator is created with the screens avaliable when the user is not signed in yet
 * 
 * @constant SignedIn
 * a stack navigator is created with the screens avaliable after sign in
 * 
 * @constant Nav
 * is a switch navigator which is in use when the user is not logged in yet
 * 
 * @constant NavNew
 * is a switch navigator which is in use after the user logs in
 * 
 */

 
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
      const width = sceneProps.layout.initWidth;

      return LeftTransition(index, position, width);
    }
  }
}


const SignedOut = createStackNavigator(
  {
    Welcome: Welcome,
    Register: Register,
  },
  {
    initialRouteName: 'Welcome',
    transitionConfig: NavigationConfig,
  }
);

const SignedIn = createStackNavigator(
  {
    Home: Home,
    Subject: Subject,
    Subject2: Subject2,
    Subject3: Subject3,
    Subject4: Subject4,
    Subject5: Subject5,
  },
  {
    initialRouteName: 'Home',
    transitionConfig: NavigationConfig,
  }
);

const Nav = createSwitchNavigator(
  {
    SignedIn: SignedIn,
    SignedOut: SignedOut
  },
  {
    initialRouteName: 'SignedOut',
    transitionConfig: NavigationConfig,
  }
);
const NavNew = createSwitchNavigator(
  {
    SignedIn: SignedIn,
    SignedOut: SignedOut
  },
  {
    initialRouteName: 'SignedIn',
    transitionConfig: NavigationConfig,
  }
);
export const NavigatorNew = createAppContainer(NavNew);
export const Navigator = createAppContainer(Nav);


