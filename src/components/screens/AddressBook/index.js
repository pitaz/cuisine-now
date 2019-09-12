import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Input, Button, Card, Icon } from 'react-native-elements';
import { Section } from '../../common';

const AddressBook = () => {
	return (
		<View style={styles.main}>
			<ScrollView>
				<Card style={styles.card}>
					<View style={styles.cardContentContainer}>
						<View style={styles.addressBookView}>
							<Text style={styles.label}>Peter Odekwo</Text>
							<Text style={styles.label}>1 Aminu Street Mende Maryland</Text>
							<Text style={styles.label}>Lagos</Text>
							<Text style={styles.label}>Lagos, 100211</Text>
							<Text style={styles.label}>Nigeria</Text>
							<Text style={styles.label}>08123456789</Text>
						</View>
						<View>
							<Icon
								name='pencil'
								type='font-awesome'
								iconStyle={styles.icon} />
							<Icon
								name='trash'
								type='font-awesome'
								color='#C7CAD1'
								iconStyle={styles.icon} />
						</View>
					</View>
					<View style={styles.cardFooter}>
						<Text style={styles.label2}>This your default delivery address</Text>
						<Text style={styles.label2}>This your default billing address</Text>
					</View>
				</Card>
			</ScrollView>
			<View style={styles.pageFooter}>
				<Text style={styles.pageFooterText}>Add new address</Text>
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
	addressBookView: {
		width: 220
	},
	cardFooter: {
		marginTop: 10
	},
	pageFooter: {
		backgroundColor: '#C7CAD1'
	},
	pageFooterText: {
		textAlign: 'center', 
		padding: 20
	}
});

export default AddressBook;
