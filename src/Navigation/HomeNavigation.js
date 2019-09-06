import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import HomeScreen from '../components/screens/Home';
import RestauarantsScreen from '../components/screens/Restaurants';

const HomeNavigation = createBottomTabNavigator(
	{
		Home: HomeScreen,
		Restaurants: RestauarantsScreen,
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ tintColor }) => {
				const { routeName } = navigation.state;
				let iconName = '';
				let icontype;

				if (routeName === 'Home') {
					iconName = 'home';
					icontype = 'font-awesome';
				} else {
					iconName = 'spoon';
					icontype = 'font-awesome';
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
