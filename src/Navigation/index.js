import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignupScreen from '../components/screens/Signup';
import SigninScreen from '../components/screens/Signin';
import HomeNavigation from './HomeNavigation';
import TopTabNavigation from './TabbedNavigation';
import RestaurantDetailScreen from '../components/screens/RestaurantDetail';
import CheckoutScreen from '../components/screens/Checkout';
import MenuScreen from '../components/screens/Menu';
import UserDetailsScreen from '../components/screens/UserDetails';
import PasswordChangeScreen from '../components/screens/ChangePassword';
import AddressBookScreen from '../components/screens/AddressBook';
import PaymentMethodScreen from '../components/screens/PaymentMethod';
import NotificationsScreen from '../components/screens/Notifications';
import SocialAccountsScreen from '../components/screens/SocialAccounts';


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
		Menu: {
			screen: MenuScreen,
			navigationOptions: {
				title: 'Menu',
			}
		},
		UserDetails: {
			screen: UserDetailsScreen,
			navigationOptions: {
				title: 'PERSONAL DETAILS',
			}
		}, 
		PasswordChange: {
			screen: PasswordChangeScreen,
			navigationOptions: {
				title: 'CHANGE PASSWORD',
			}
		}, 
		AddressBook: {
			screen: AddressBookScreen,
			navigationOptions: {
				title: 'ADDRESS BOOK',
			}
		}, 
		PaymentMethod: {
			screen: PaymentMethodScreen,
			navigationOptions: {
				title: 'PAYMENT METHOD',
			}
		}, 
		Notifications: {
			screen: NotificationsScreen,
			navigationOptions: {
				title: 'NOTIFICATIONS',
			}
		}, 
		SocialAccounts: {
			screen: SocialAccountsScreen,
			navigationOptions: {
				title: 'SOCIAL ACCOUNTS',
			}
		}, 
		Home: {
			screen: HomeNavigation,
			navigationOptions: {
				header:null,
				tabBarVisible: false,
			}
		},
		TopTab: {
			screen: TopTabNavigation,
			navigationOptions: {
				title: 'ORDERS',
			}
		}
	},
	{
		initialRouteName: 'Signin',
	}
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
