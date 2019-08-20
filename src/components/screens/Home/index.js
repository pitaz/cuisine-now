// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import {
	ScrollView,
	View,
	TextInput,
	Text,
	Image,
	StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import imageIcon from '../../../assets/images/icons8-italian-pizza-100.png';
import imageIcon2 from '../../../assets/images/icons8-french-fries-100.png';
import imageIcon3 from '../../../assets/images/icons8-steak-100.png';
import imageIcon4 from '../../../assets/images/icons8-beef-burger-100.png';
import { Section, SearchBox, Card } from '../../common';
import Places from '../../Places';

class Home extends Component {
	render() {
		const {
			main,
			topCategoriesContainer,
			topCategoriesText,
			topCategoriesSubText,
			cardStyle,
			imageIconStyle,
			iconText
		} = styles;
	
		return (
			<View>
				<ScrollView>
					<View style={main}>
						<SearchBox  />
						<Places/>
						<View style={topCategoriesContainer} >
							<Text style={topCategoriesText}>Top categories</Text>
							<Section>
								<Text style={topCategoriesSubText}>See all</Text>
								<Icon name="chevron-right" color="#26315F" />
							</Section>
						</View>
						<ScrollView horizontal>
							<Section>
								<Card cardStyle={cardStyle}>
									<Image source={imageIcon}  style={imageIconStyle} />
									<Text style={iconText}>Pizza</Text>
								</Card>
								<Card cardStyle={cardStyle}>
									<Image source={imageIcon2}  style={imageIconStyle} />
									<Text style={iconText}>Fries</Text>
								</Card>
								<Card cardStyle={cardStyle}>
									<Image source={imageIcon3}  style={imageIconStyle} />
									<Text style={iconText}>Steak</Text>
								</Card>
								<Card cardStyle={cardStyle}>
									<Image source={imageIcon4}  style={imageIconStyle} />
									<Text style={iconText}>Meat burger</Text>
								</Card>
							</Section>
						</ScrollView>
					</View>
				</ScrollView>
			</View>
		);
	}	
}

const styles = StyleSheet.create({
	main: {
		marginTop: 80,
		padding: 5,
		margin: 5,
	},
	searchBox: {
		borderColor: '#dedede',
		borderWidth: 1,
		borderRadius: 28,
		flex: 2
	},
	inputStyle: {
		color: '#696464',
		paddingRight: 5,
		paddingLeft: 5,
		paddingBottom: 5,
		fontSize: 14,
		lineHeight: 20,
	},
	placesSection: {
		borderRadius: 8,
		margin: 5,
		padding: 2
	},
	placesImage: {
		height: 240,
		width: 210,
		borderRadius: 8
	},
	topCategoriesContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
	},
	topCategoriesText: {
		fontSize: 24,
		margin: 5,
		color: '#26315F'
	},
	topCategoriesSubText: {
		fontSize: 18,
		margin: 1,
		color: '#26315F'
	},
	cardStyle: {
		padding: 10, 
		margin: 15, 
		borderRadius: 6,
	},
	imageIconStyle: {
		width: 60, 
		height: 60, 
		margin: 5
	},
	iconText: {
		textAlign: 'center'
	}
});

export default Home;
