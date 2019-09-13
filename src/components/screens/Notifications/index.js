import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { notifications } from './fixtures';

const Notifications = () => {
	return (
		<View style={styles.main}>
			<View style={styles.notificationCategories}>
				<Text style={styles.categoriesLabel}>CATEGORIES</Text>
				{
					notifications.map((notification) => {
						return (
							<View style={styles.notificationRow}>
								<View style={styles.iconContainer}>
									<Icon
										name={notification.icon}
										type={notification.icontype}
										onPress={() => console.log('hello')} 
										iconStyle={styles.leftIconStyle}/>
									<Text style={styles.text}>{notification.text}</Text>
								</View>
								<Icon
									name='toggle-on'
									type='font-awesome'
									color='#C7CAD1'
									onPress={() => console.log('hello')} 
									iconStyle={styles.rightIconStyle}/>
							</View>
						);
					})
				}
			</View>
			<View style={styles.footer}>
				<Text style={styles.footerLabel1}>You can change your communications preferences, including emails and SMS, from My Account</Text>
				<Text style={styles.footerLabel2}>CONTACT PREFERENCES</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1, backgroundColor: '#C7CAD1'
	},
	notificationCategories: {
		backgroundColor: 'white', 
		flex: 1, 
		marginBottom: 20
	},
	categoriesLabel: {
		padding: 10, 
		fontSize: 14
	},
	notificationRow: {
		flexDirection: 'row', 
		justifyContent: 'space-between'
	},
	iconContainer: {
		flexDirection: 'row', 
		padding: 10
	},
	leftIconStyle: {
		padding: 10, 
		marginRight: 5
	},
	rightIconStyle: {
		padding: 15
	},
	text: {
		width: 250, 
		padding: 5
	},
	footer: {
		padding: 10
	}, 
	footerLabel1: {
		padding: 10, 
		fontSize: 11
	},
	footerLabel2: {
		padding: 10, 
		fontSize: 14
	}
  
});

export default Notifications;
