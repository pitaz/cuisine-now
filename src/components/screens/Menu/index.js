import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import { menu } from './fixtures';
import MenuItem from './MenuItem';

const Menu = ({ navigation }) => {

	return (
		<ScrollView style={styles.ScrollViewStyle}>
			{
				menu.map((item, index) => (
					<MenuItem key={index} navigation={navigation} menuData={item} />
				))
			}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		height: 200
	},
	ScrollViewStyle: {
		// marginTop: 60
	},
	slide: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	slide2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#97CAE5'
	},
	slide3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#92BBD9'
	},
	text: {
		position: 'absolute',
		color: '#fff',
		fontSize: 30,
		fontWeight: '400',
		marginTop: 20,
		zIndex: 100,
		fontFamily: 'Raleway-Black'
	},
	restaurantsImageStyle: {
		flex: 1, 
		height: 200, 
		width: '100%'
	},
	restaurantsCountText: {
		marginLeft: 5, 
		padding: 12, 
		fontSize: 14, 
		fontWeight: '400'
	}
});

export default Menu;
