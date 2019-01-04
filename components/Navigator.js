import Welcome from './Welcome';
import Register from './Register';
import Home from './Home';
import { createStackNavigator, createAppContainer } from 'react-navigation';


const Nav = createStackNavigator(
// creating a navigator stack
  {
  // assigning names to different components
    Welcome: Welcome,
    Register: Register,
    Home: Home,
  },
  {
  // "Home screen" / On start - first screen
    initialRouteName: 'Welcome'
  }
);

const Navigator = createAppContainer(Nav);
// creating a "element" from navigator, so it can be used in App.js

export default Navigator;