import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';
import NewOrdersScreen from '../components/screens/NewOrders';
import CompletedOrdersScreen from '../components/screens/CompletedOrders';

const TopTabNavigation = createMaterialTopTabNavigator(
	{
		NewOrders: {
			screen: NewOrdersScreen,
			navigationOptions: {
				title: 'NEW ORDERS',
			}
		},
		OldOrders: {
			screen: CompletedOrdersScreen ,
			navigationOptions: {
				title: 'OLD ORDERS',
			}
		},
	},
	{
		initialRouteName: 'NewOrders',
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ tintColor }) => {
				const { routeName } = navigation.state;
				let iconName = '';
				let icontype;
				switch (routeName) {
				case 'NewOrders':
					console.log(routeName);
					iconName = 'home';
					icontype = 'font-awesome';
					break;
				case 'OldOrders':
					iconName = 'coffee';
					icontype = 'font-awesome';
					break;

				default:
					break;
				}

				return <Icon name={iconName} type={icontype}  iconStyle={{ color: tintColor}} />;
			}, 
		}),
		tabBarOptions: {
			labelStyle: {
				fontSize: 12,
				color: 'black'
			},
			style: {
				backgroundColor: 'white',
			},
			indicatorStyle: {
				borderBottomColor: 'black',
				borderBottomWidth: 2,
			},
		},
	},
);

export default TopTabNavigation;
