import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Input, Button, Card, Icon } from 'react-native-elements';
import { Section } from '../../common';

const PaymentMethod = () => {
	return (
		<View style={styles.main}>
			<ScrollView>
				<Card style={styles.card}>
					<View style={styles.cardContentContainer}>
						<View style={{ flexDirection: 'row'}}>
							<Icon
								name='cc-visa'
								type='font-awesome'
								iconStyle={styles.icon} />
							<View style={styles.PaymentMethodView}>
								<Text style={styles.label}>VISA Debit (1234)</Text>
								<Text style={styles.label}>Exp: 02/23</Text>
								<Text style={styles.label}>Odekwo Peter .A.</Text>
							</View>
						</View>
						<View>
							<Icon
								name='trash'
								type='font-awesome'
								iconStyle={styles.icon} />
						</View>
					</View>
					<View style={styles.cardFooter}>
						<Text style={styles.label2}>This your default payment method</Text>
					</View>
				</Card>
			</ScrollView>
			<View style={styles.pageFooter}>
				<Text style={styles.pageFooterText}>Add new payment method</Text>
			</View>
			
		</View>

	);
};

const styles = StyleSheet.create({
	label: {
		fontSize: 11,
		padding: 5
	},
	label2: {
		fontSize: 11,
		padding: 5,
		color: '#C7CAD1'
	},
	card: {
		padding: 0, 
		marginLeft: 0, 
		marginRight: 0, 
		marginTop: 0,
		marginBottom: 10 
	},
	input: {
		padding: 10, 
		fontSize: 11
	},
	inputLabel: {
		fontSize: 11
	},
	scrollView: {
		backgroundColor: '#F5F6F9'
	},
	main: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: '#F5F6F9'
	},
	button: {
		margin: 20, 
		backgroundColor: 'gray'
	},
	cardContentContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	icon: {
		padding: 10
	},
	PaymentMethodView: {
		width: 220
	},
	cardFooter: {
		marginTop: 10
	},
	pageFooter: {
		backgroundColor: '#C7CAD1'
	},
	pageFooterText: {
		textAlign: 'right', 
		padding: 20
	}
});

export default PaymentMethod;
