import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../components/screens/Home';

const HomeNavigation = createBottomTabNavigator(
	{
		Home: HomeScreen
	},
	{
		initialRouteName: 'Home',
		headerMode: 'none'
	}
);

export default HomeNavigation;
