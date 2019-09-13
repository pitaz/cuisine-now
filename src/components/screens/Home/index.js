// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import {
	ScrollView,
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Section, Card } from '../../common';
import SearchBox from '../../common/SearchBox';
import Places from '../../Places';
import { categories } from './fixtures';

class Home extends Component {

	renderTopCategories() {
		const { cardStyle, imageIconStyle, iconText} = styles;

		return categories.map((item, index) => (
			<View key={index} onPress={() => this.navigation.navigate('Menu')}>
				<Card key={index + 1} cardStyle={cardStyle} >
					<Image key={item.image} source={item.image}  style={imageIconStyle} />
					<Text  key={item.name} onPress={() => this.props.navigation.navigate('Menu')} style={iconText}>{item.name}</Text>
				</Card>
			</View>
		));
	}

	render() {
		const {
			main,
			topCategoriesContainer,
			topCategoriesText,
			topCategoriesSubText,
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
								{this.renderTopCategories()}
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

export default withNavigation(Home);
