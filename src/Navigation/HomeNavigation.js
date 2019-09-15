import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import HomeScreen from '../components/screens/Home';
import RestauarantsScreen from '../components/screens/Restaurants';
import PlacesScreen from '../components/screens/Places';
import FavouritesScreen from '../components/screens/Favourites';
import ProfileScreen from '../components/screens/Profile';

const HomeNavigation = createBottomTabNavigator(
	{
		Home: HomeScreen,
		Restaurants: RestauarantsScreen,
		Favourites:FavouritesScreen,
		Nearby: PlacesScreen,
		Profile: ProfileScreen,
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ tintColor }) => {
				const { routeName } = navigation.state;
				let iconName = '';
				let icontype;
				switch (routeName) {
				case 'Home':
					iconName = 'home';
					icontype = 'font-awesome';
					break;
				case 'Restaurants':
					iconName = 'coffee';
					icontype = 'font-awesome';
					break;
				case 'Profile':
					iconName = 'user';
					icontype = 'font-awesome';
					break;
				case 'Favourites':
					iconName = 'heart';
					icontype = 'font-awesome';
					break;
				case 'Nearby':
					iconName = 'map';
					icontype = 'font-awesome';
					break;

				default:
					break;
				}

				return <Icon name={iconName} type={icontype}  iconStyle={{ color: tintColor}} />;
			}
		}),
		tabBarOptions: {
			activeTintColor: '#F93963',
			inactiveTintColor: 'gray',
		},
	},
);

export default HomeNavigation;
