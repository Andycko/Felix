import Welcome from './Welcome';
import Register from './Register';
import { createStackNavigator, createAppContainer } from 'react-navigation';


const Nav = createStackNavigator(
  {
    Welcome: Welcome,
    Register: Register,
  }
);

const Navigator = createAppContainer(Nav);

export default Navigator;