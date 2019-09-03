import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../components/screens/Home';
import RestauarantsScreen from '../components/screens/Restaurants';

const HomeNavigation = createBottomTabNavigator(
	{
		Home: HomeScreen,
		Restaurants: RestauarantsScreen
	},
	{
		initialRouteName: 'Home',
		// headerMode: 'none'
	}
);

export default HomeNavigation;
