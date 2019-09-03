import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignupScreen from '../components/screens/Signup';
import SigninScreen from '../components/screens/Signin';
import HomeNavigation from './HomeNavigation';
import RestaurantDetailScreen from '../components/screens/RestaurantDetail';


const RootStack = createStackNavigator(
	{
		Signup: {
			screen: SignupScreen,
			navigationOptions: {
				header:null,
				tabBarVisible: false,
			}
		},
		Signin: {
			screen: SigninScreen,
			navigationOptions: {
				header:null,
				tabBarVisible: false,
			}
		},
		RestaurantDetail: {
			screen: RestaurantDetailScreen,
			navigationOptions: {
				header:null,
				tabBarVisible: false,
			}
		}, 
		
		Home: {
			screen: HomeNavigation,
			navigationOptions: {
				header:null,
				tabBarVisible: false,
			}
		}
	},
	{
		initialRouteName: 'Home',
	}
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
