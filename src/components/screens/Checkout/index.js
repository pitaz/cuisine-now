import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { Card, Button } from '../../common';

const Checkout = ({ navigation }) => {
	const {  
		cardStyle, 
		imageIconStyle, 
		imageIcon, 
		iconText, 
		newOrderAlertButton, 
		newOrderAlertButtonText,
		cardContainer,
		panel,
		deliveryAdressContainer,
		deliveryAddressText,
		text,
		paymentPanelContent,
		buttonContainer 
	} = styles;
	return (
		<View style={cardContainer}>
			<Card cardStyle={cardStyle}>
				<Image source={imageIcon}  style={imageIconStyle} />
				<Text style={iconText}>DELIVERY ADRRESS</Text>
				<View style={panel}>
					<View style={deliveryAdressContainer}>
						<Text style={deliveryAddressText}>Home Address</Text>
						<Text style={deliveryAddressText}>214 Levent\Besiktas Apt. 002</Text>
					</View>
					<View>
						<Icon
							name='check'
							type='feather'
							iconStyle={{color: 'green'}}
						/>
					</View>
				</View>

				<Text style={{...iconText, marginTop: 30,}}>PAYMENT METHOD</Text>
				<View style={panel}>
					<Icon
						name='paypal'
						type='font-awesome'
						iconStyle={{color: '#000', padding: 10}}
					/>
					<Text style={text}>pitaz.odekwo@example.com</Text>
				</View>

				<View style={panel}>
					<View style={paymentPanelContent}>
						<Icon
							name='cc-visa'
							type='font-awesome'
							iconStyle={{color: '#000', padding: 10}}
						/>
						<Text style={text}>**** **** **** 1234</Text>
					</View>

					<Icon
						name='check'
						type='feather'
						iconStyle={{color: '#000', padding: 10}}
					/>
				</View>	

				<View style={panel}>
					<View style={paymentPanelContent}>
						<Icon
							name='cc-mastercard'
							type='font-awesome'
							iconStyle={{color: '#000', padding: 10}}
						/>
						<Text style={text}>**** **** **** 1234</Text>
					</View>
				</View>	

				<View style={buttonContainer}>
					<Button 
  					textStyle={newOrderAlertButtonText} 
  					buttonStyle={newOrderAlertButton}
  					onPress={() => navigation.navigate('Home')}>
						Payment
  				</Button>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	cardStyle: {
		padding: 10, 
		margin: 20, 
		borderRadius: 6,
		backgroundColor: '#fff'
	},
	imageIconStyle: {},
	iconText: {
		padding: 10,
		fontSize: 18
	},
	imageIcon: {},
	newOrderAlertButtonText: {
		alignSelf: 'center',
		color: '#fff',
		fontSize: 16,
		padding: 10
	},
	newOrderAlertButton: {
		alignSelf: 'stretch',
		backgroundColor: '#F93963',
		borderRadius: 5,
		marginLeft: 5,
		marginRight: 5
	},
	cardContainer: {
		backgroundColor: '#F5F8FB', 
		flex: 1
	},
	panel: {
		flexDirection: 'row',
		borderRadius: 16,
		borderColor: 'green',
		borderWidth: 1,
		marginTop: 15,
		padding: 10
	},
	deliveryAdressContainer: {
		flex: 1,
		justifyContent: 'space-between',
	},
	deliveryAddressText: {
		padding: 5, 
		fontSize: 16
	},
	text: {
		padding: 10
	},
	paymentPanelContent: {
		flexDirection: 'row',
		flex: 1,
		flexWrap: 'wrap'
	},
	buttonContainer: {
		marginTop: 20,
	}
});

export default Checkout;
