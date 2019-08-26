import React, { Component } from 'react';
import { View, ScrollView, FlatList, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { restaurants, menu } from './fixtures';
import RestaurantRow from '../../RestaurantRow';

const Restauarants = () => {

	return (
		<ScrollView style={{ marginTop: 60}}>
			<Swiper style={styles.wrapper}>
				{ 
					restaurants.map((item, index) => (
						<View style={styles.slide} key={index}>
							<Text key={index} style={styles.text}>{item.type}</Text>
							<Image source={{uri: item.image}}  style={{ flex: 1, height: 200, width: '100%'}}/>
						</View>
					))
				}
			</Swiper>
			<Text style={{marginLeft: 5, padding: 12, fontSize: 14, fontWeight: '400'}}>{menu.length} places</Text>
			{
				menu.map((item, index) => (
					<RestaurantRow key={index} menu={item} />
				))
			}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		height: 200
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
	}
});

export default Restauarants;
