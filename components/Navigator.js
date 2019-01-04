import Welcome from './Welcome';
import Register from './Register';
import Home from './Home';
import { createStackNavigator, createAppContainer } from 'react-navigation';


const Nav = createStackNavigator(
  {
    Welcome: Welcome,
    Register: Register,
    Home: Home,
  },
  {
    initialRouteName: 'Welcome'
  }
);

const Navigator = createAppContainer(Nav);

export default Navigator;