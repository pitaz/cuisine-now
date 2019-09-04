import React, { Component, Fragment } from 'react';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { ScrollView, View, ImageBackground, Text, Image, TouchableOpacity, FlatList } from 'react-native'; 
import { withNavigation } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { CONTENT, featured } from './fixtures';
import styles from './styles';
import backgroundImage from '../../../../assets/images/cook-cooking-cuisine-2641886.jpg';
import { Button } from '../../common';

class RestaurantDetail extends Component {
	state = {
		activeSections: [],
		collapsed: true,
		multipleSelect: false,
	};

  toggleExpanded = () => {
  	this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
  	this.setState({
  		activeSections: sections.includes(undefined) ? [] : sections,
  	});
  };

  renderHeader = (section, key, isActive, sections) => {
  	return (
  		<Animatable.View
  			duration={400}
  			style={[styles.header]}
  			transition="backgroundColor"
  		>
  			<View style={styles.expandableListContainer}>
  				<Text style={styles.headerText}>{section.title}</Text>
  				<View style={styles.expandableListHeaderContainer}>
  					<Text style={styles.countText}>{section.count}</Text>
  					{
  						sections[key] && isActive? 
  							(<Fragment>
  								<Icon
  									name='chevron-down'
  									type='feather'
  									iconStyle={{color: '#C7CAD1'}}
  								/>
  							</Fragment>
  							) : 	
  							<Icon
  							name='chevron-right'
  								type='feather' 
  								iconStyle={{color: '#C7CAD1'}}
  						/>
  					}
  				
  				</View>
  			</View>
  		</Animatable.View>
  	);
  };

  renderContent(section, isActive) {
  	return (
  		<Animatable.View
  			duration={800}
  			style={[styles.content]}
  			transition="backgroundColor"
  		>
  			<FlatList
  				data={[{key: 'a'}, {key: 'b'}]}
  				renderItem={({item}) => <Text>{item.key}</Text>}
  			/>
  		</Animatable.View>
  	);
  }
	
  renderFeaturedItem(featured, styles) {
  	const { 
  		featuredItemsSection, 
  		featuredItemImage, 
  		featuredItemName, 
  		featuredItemPrice 
  	} = styles;
		
		
  	return featured.map((item, index) =>  (
  			<View key={index} style={featuredItemsSection}>
  				<Image 
  					key={index}
  					style={featuredItemImage}
  					source={{uri: item.image}} 
  				/>
  				<Text style={featuredItemName}>{item.name}</Text>
  				<Text style={featuredItemPrice}>{item.price}</Text>
  			</View>
  		)	
  	);
  }

  render() {
  	const { activeSections } = this.state;
  	const {
  		headerBackgroundImage,
  		headerMenuContainer,
  		backIconStyle,
  		rightHeaderIconsContainer,
  		deliveryTextContainer,
  		deliveryText,
  		menuName,
  		menuExtrasSection,
  		menuExtrasText,
  		locationContainer,
  		cuisineLocation,
  		cuisineLocationIcon,
  		orderContainer,
  		newOrderAlertContainer,
  		newOrderAlertText1,
  		newOrderAlertText2,
  		newOrderAlertButtonText,
  		newOrderAlertButtonContainer,
  		newOrderAlertButton,
  		featuredItems,
  		featuredItemsContainer,
  		fullMenuText,
  		fullMenuTextContainer,
  		accordionContainer
  	} = styles;
	
		
  	return (
  		<ScrollView>
  			<ImageBackground 
  				style={headerBackgroundImage}
  				source={backgroundImage}
  			>
  				<View style={headerMenuContainer}>
  					<View>
  						<Icon
  							name='arrow-left'
  							type='feather' 
  							color='#fff'
  							iconStyle={backIconStyle}
  						/>
  					</View>
  					<View style={rightHeaderIconsContainer}>
  						<Icon
  							name='corner-up-left'
  							type='feather' 
  							color='#fff'
  							iconStyle={backIconStyle}
  						/>
  						<Icon
  							name='bookmark'
  							type='feather' 
  							color='#fff'
  							iconStyle={backIconStyle}
  						/>
  					</View>
  				</View>
  				<View>
  					<View style={deliveryTextContainer}>
  						<Text style={deliveryText}>Free delivery</Text>
  					</View>
  					<Text style={menuName}>Cuotro Formagattie Soup</Text>
  					<View style={locationContainer}>
  						<Icon
  							name='map-pin'
  							type='feather' 
  							color='#6b778d'
  							iconStyle={cuisineLocationIcon}
  						/>
  						<Text style={cuisineLocation}>299 Leventis/Besiktas</Text>
  					</View>
						
  					<View style={menuExtrasSection}>
  						<Text style={menuExtrasText}>nnnn</Text>
  						<Text style={menuExtrasText}>nnnn</Text>
  						<Text style={menuExtrasText}>nnnn</Text>
  					</View>
						
  					<View style={orderContainer}>
  						<View style={newOrderAlertContainer}>
  							<Text style={newOrderAlertText1}>New! Try Pickup</Text>
  							<Text style={newOrderAlertText2}>Pickup on your time. Your order is ready when you are ready</Text>
  						</View>
  						<View style={newOrderAlertButtonContainer}>
  							<Button 
  								textStyle={newOrderAlertButtonText} 
  								buttonStyle={newOrderAlertButton}
  								onPress={() => this.props.navigation.navigate('Checkout')}>
										Order now
  							</Button>
  						</View>
  					</View>
						
  				</View>
  			</ImageBackground>
  			<View>
  				<Text style={featuredItems}>Featured Items</Text>
  				<ScrollView horizontal>
  					<View style={featuredItemsContainer}>
  						{this.renderFeaturedItem(featured, styles)}
  					</View>
  				</ScrollView>
  				<View>
  					<View style={fullMenuTextContainer}>
  						<Text style={fullMenuText}>Full Menu</Text>
  						<Text style={fullMenuText}>View all</Text>
  					</View>
  					<View style={styles.container}>
  						<ScrollView contentContainerStyle={accordionContainer}>
  							<Accordion
  								activeSections={activeSections}
  								sections={CONTENT}
  								touchableComponent={TouchableOpacity}
  								renderHeader={this.renderHeader}
  								renderContent={this.renderContent}
  								duration={400}
  								onChange={this.setSections}
  							/>
  						</ScrollView>
  					</View>
  				</View>
  			</View>
  			<View>
  				<Button 
  					textStyle={newOrderAlertButtonText} 
  					buttonStyle={newOrderAlertButton}
  					onPress={() => this.props.navigation.navigate('Checkout')}>
						Add to order
  				</Button>
  			</View>
  		</ScrollView>
  	);
  }
}

export default withNavigation(RestaurantDetail);
