import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Card } from '../../common';
import { favourites } from './fixtures';

const renderFavourites = (item, index, navigation) => (
	
	<Card cardStyle={styles.rowCardStyle} key={index} >
		<View style={styles.cardContentContainer}>
			<TouchableOpacity onPress={() => navigation.navigate('MealDetails')}>
				<View style={styles.cardContentSection1}>
					<Image source={{ uri: 'https://res.cloudinary.com/doibwtx2d/image/upload/v1566823453/images/cuisine/appetizer-chopsticks-cuisine-923181_g5ml1h.jpg'}} 
						style={styles.image}
					/>
					<View style={styles.labelsContainer}>
						<Text style={styles.menuName}>{item.name}</Text>
						<Text style={styles.locationName}>{item.location}</Text>
						<View style={styles.ratingsContainer}>
							<Text style={styles.rating}>4.3<Text style={styles.ratingCount}>({item.rating} ratings)</Text></Text>
						</View>
						<Text style={styles.menuPrice}>$ {item.price}</Text>
					</View>
				</View>
			</TouchableOpacity>
			<View style={styles.favouriteIcon}>
				<Icon
					name='ios-heart'
					type='ionicon'
					color="#F93963"
				/>
		
			</View>
		</View>
	</Card>
);

const Favourites = ({ navigation }) => {
	return (
		<ScrollView>
			<View style={styles.main}>
				<Text style={styles.headerText}>Favourites</Text>
				{
					favourites.map((item, index) => {
						return renderFavourites(item, index, navigation);
					})
				}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	main: {
		marginTop: 30, 
		padding: 10
	},
	headerText: {
		fontSize: 20, 
		fontWeight: '700', 
		padding: 5, 
		textAlign: 'center'
	},
	rowCardStyle: {
		flex: 1,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 5,
		backgroundColor: 'white'
	},
	cardContentContainer: {
		flexDirection: 'row', 
		justifyContent: 'space-between'
	},
	cardContentSection1: {
		flexDirection: 'row'
	},
	image: {
		width: 80, 
		margin: 2
	},
	labelsContainer: {
		margin: 5
	},
	menuName: {
		padding: 2, 
		fontSize: 18, 
		fontWeight: '400', 
		fontFamily: 'Raleway-Black',
		color: '#26315F'
	},
	locationName: {
		fontSize: 14, 
		padding: 3, 
		color: '#C7CAD1'
	},
	ratingsContainer: {
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		flex: 1
	},
	rating: {
		fontSize: 12, 
		padding: 3
	},
	ratingCount: {
		padding: 2, 
		color: '#C7CAD1'
	},
	menuPrice: {
		padding: 3, 
		fontWeight: '400', 
		fontSize: 17
	},
	favouriteIcon: {
		margin: 15, 
		justifyContent: 'space-between'
	}
});

export default Favourites;
