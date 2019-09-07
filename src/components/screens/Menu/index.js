import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import { menu } from './fixtures';
import MenuItem from './MenuItem';

const Menu = ({ navigation }) => {

	return (
		<ScrollView>
			{
				menu.map((item, index) => (
					<MenuItem key={index} navigation={navigation} menuData={item} />
				))
			}
		</ScrollView>
	);
};

export default Menu;
