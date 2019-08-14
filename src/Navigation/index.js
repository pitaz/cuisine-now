import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignupScreen from '../components/screens/Signup';
import SigninScreen from '../components/screens/Signin';
import HomeScreen from '../components/screens/Home';
import homeNavigation from './homeNavigation';

const RootStack = createStackNavigator(
  {
    Signup: SignupScreen,
    Signin: SigninScreen,
    Home: HomeNavigation
  },
  {
    initialRouteName: 'Signup',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
