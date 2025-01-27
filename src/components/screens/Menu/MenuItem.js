import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Card } from '../../common';

const MenuItem = ({ menuData, navigation }) => {
	const { menu, location, image } = menuData;
	return (
		<View style={styles.rowContainer}>
			<Card cardStyle={styles.rowCardStyle}>
				<View style={styles.cardContent}>
					<Image source={{ uri: image}} style={styles.cardImage} />
					<View style={styles.cardSubContent}>
						<View>
							<Text style={styles.menuName} onPress={() => navigation.navigate('MealDetails')}>{menu}</Text>
							<View style={styles.locationContainer}>
                	<Icon
                		name='map-pin'
                		type='feather' 
                		color='#6b778d'
                		iconStyle={styles.locationIconStyle}
                	/>
                	<Text style={styles.locationName}>{location}</Text>
							</View> 
							<View style={styles.starContainer}>
								<Icon
              		name='star'
              		type='ionicons' 
              		color='#6b778d'
              		iconStyle={styles.starIconStyle}
              	/>
              	<Text style={styles.ratingText}>4.9 <Text style={styles.ratingSubText}>(120 rating)</Text></Text>
              	<View style={styles.deliveryTextContainer}>
              		<Text style={styles.deliveryText}>free delivery</Text>
              	</View>
							</View>       
						</View>
	  
						<Icon
							name='bookmark'
							type='feather' 
							color='#C7CAD1'
							iconStyle={styles.bookmarkIcon}
						/> 

					</View>
				</View>
			</Card>
		</View>
	); 
};

const styles = StyleSheet.create({
	rowContainer: {
		flexDirection: 'row',
		margin: 2
	},
	rowCardStyle: {
		flex: 1,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 5,
		backgroundColor: 'white'
	},
	cardContent: {
		flex: 1,
		flexDirection: 'row', 
		padding: 5,
	},
	cardImage: { 
		width: 100, 
		height: 100, 
		borderRadius: 6, 
		padding: 10
	},
	cardSubContent: {
		flex: 1,
		flexDirection: 'row', 
		justifyContent: 'space-between',
		marginLeft: 5,
	},
	menuName: {
		padding: 2, 
		width: 160, 
		fontSize: 16, 
		fontWeight: '400', 
		fontFamily: 'Raleway-Black', 
		color: '#26315F'
	},
	bookmarkIcon: {
		fontSize: 25, 
		fontWeight: '100'
	},
	locationContainer: {
		padding: 2, 
		flexDirection: 'row'
	},
	locationIconStyle: {
		fontSize: 12, 
		padding: 3
	},
	locationName: {
		fontSize: 12, 
		padding: 3, 
		color: '#C7CAD1'
	},
	starContainer: {
		flexDirection: 'row', 
		padding: 2
	},
	starIconStyle: {
		fontSize: 16, 
		color: '#f7b71d'
	},
	ratingText: {
		fontSize: 12, 
		padding: 3
	},
	ratingSubText: { 
		color: '#C7CAD1'
	},
	deliveryTextContainer: {
		borderRadius: 25, 
		backgroundColor: '#F93963', 
		marginLeft: 20
	},
	deliveryText: {
		fontSize: 10, 
		padding: 3, 
		color: 'white'
	}
});

export default MenuItem;
