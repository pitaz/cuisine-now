import React, {Fragment} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import backgroundImage from '../assets/images/action-cook-cooking-2237189.jpg';
import {Icon} from 'react-native-elements';
import backgroundImage2 from '../assets/images/appetizer-color-dark-326268.jpg';

const Places = () => {
	const {
		placesImage,
		placesSection,
		placesHeaderText,
		cuisineName,
		cuisineAddress,
		cuisineExtra
	} = styles;

	return (
		<Fragment>
			<Text style={placesHeaderText}>
				Discover new places
			</Text>
			<ScrollView horizontal>
				<View style={placesSection}>
					<Image source={backgroundImage} style={placesImage} />
					<Text style={cuisineName}>Rahat Brasserie</Text>
					<Text style={cuisineAddress}>124 Leventis/Besiktas</Text>
					<View style={{ flexDirection: 'row' }}>
						<Icon name="star" color="#ffdd67" />
						<Text style={cuisineExtra}>4.9(120 ratings)</Text>
						<Text style={cuisineExtra}>free delivery</Text>
					</View>
				</View>
				<View style={placesSection}>
					<Image source={backgroundImage2} style={placesImage} />
					<Text style={cuisineName}>Rahat Brasserie</Text>
					<Text style={cuisineAddress}>124 Leventis/Besiktas</Text>
					<View style={{ flexDirection: 'row' }}>
						<Icon name="star" color="#ffdd67" />
						<Text style={cuisineExtra}>4.9(120 ratings)</Text>
						<Text style={cuisineExtra}>free delivery</Text>
					</View>
				</View>
			</ScrollView>
		</Fragment>
	);
};

const styles = StyleSheet.create({
	placesSection: {
		borderRadius: 8,
		margin: 5,
		padding: 2
	},
	placesHeaderText: {
		fontSize: 30,
		margin: 5,
		color: '#26315F'
	},
	placesImage: {
		height: 240,
		width: 210,
		borderRadius: 8
	},
	cuisineName: {
		margin: 5,
		fontSize: 22,
		color: '#26315F'
	},
	cuisineAddress: {
		margin: 5,
		fontSize: 14,
		color: '#424242'
	},
	cuisineExtra: {
		fontSize: 12,
		margin: 5,
		color: '#26315F'
	}
});

export default Places;
