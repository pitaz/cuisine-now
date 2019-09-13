import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const SocialAccounts = () => {
	return (
		<View style={styles.main}>
			<View style={styles.notificationCategories}>
				<View style={styles.notificationRow}>
					<View style={styles.iconContainer}>
						<Icon
							name='logo-google'
							type='ionicon'
							onPress={() => console.log('hello')} 
							iconStyle={styles.leftIconStyle}/>
						<View>
							<Text style={styles.text}>Google</Text>
							<Text style={styles.text}>john.doe@example.com</Text>
						</View>
					</View>
					<Icon
						name='toggle-on'
						type='font-awesome'
						color='#C7CAD1'
						onPress={() => console.log('hello')} 
						iconStyle={styles.rightIconStyle}/>
				</View>
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

export default SocialAccounts;
