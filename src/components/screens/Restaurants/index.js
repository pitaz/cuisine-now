import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { restaurants, menu } from './fixtures';
import MenuItem from './MenuItem';

const Restauarants = ({ navigation }) => {

	return (
		<ScrollView style={styles.ScrollViewStyle}>
			<Swiper style={styles.wrapper}>
				{ 
					restaurants.map((item, index) => (
						<View style={styles.slide} key={index}>
							<Text key={index} style={styles.text}>{item.type}</Text>
							<Image source={{uri: item.image}}  style={styles.restaurantsImageStyle}/>
						</View>
					))
				}
			</Swiper>
			<Text style={styles.restaurantsCountText}>{menu.length} places</Text>
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
		marginTop: 60
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

export default Restauarants;
