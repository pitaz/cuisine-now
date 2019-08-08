import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignupScreen from '../components/screens/Signup';
import SigninScreen from '../components/screens/Signin';

const RootStack = createStackNavigator(
  {
    Signup: SignupScreen,
    Signin: SigninScreen,
  },
  {
    initialRouteName: 'Signup',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
