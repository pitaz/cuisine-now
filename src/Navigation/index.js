import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignupScreen from '../components/screens/Signup';
import SigninScreen from '../components/screens/Signin';
import HomeNavigation from './HomeNavigation';
import RestaurantDetailScreen from '../components/screens/RestaurantDetail';
import CheckoutScreen from '../components/screens/Checkout';


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
		Checkout: {
			screen: CheckoutScreen,
			navigationOptions: {
				title: 'Checkout',
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
