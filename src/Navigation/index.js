import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignupScreen from '../components/screens/Signup';
import SigninScreen from '../components/screens/Signin';
import HomeNavigation from './HomeNavigation';

const RootStack = createStackNavigator(
	{
		Signup: SignupScreen,
		Signin: SigninScreen,
		Home: HomeNavigation
	},
	{
		initialRouteName: 'Home',
		headerMode: 'none'
	}
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
