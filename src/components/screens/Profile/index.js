import React from 'react';
import { View, Text, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { Avatar, ListItem, Card } from 'react-native-elements';
import { list, list2 } from './fixtures';

const pages = [
	'TopTab', 
	'UserDetails', 
	'PasswordChange', 
	'AddressBook', 
	'PaymentMethod', 
	'Notifications', 
	'SocialAccounts'
];
const Profile = ({ navigation }) => {
	return (
		<ScrollView>
			<View style={styles.profileViewContainer}>
				<View style={styles.profileHeaderContainer}>
					<Avatar
						size="large"  
						rounded 
						title="JD"
						containerStyle={styles.avatar} />
					<Text style={styles.username}>John Doe</Text>
				</View>
				<Card containerStyle={styles.card}>
					<View>
						
						{
							list.map((l, i) => (
								<ListItem
									key={i}
									leftIcon={{ name: l.icon, type: 'material'}}
									onPress={() => navigation.navigate(pages[i])}
									title={l.name}
									titleStyle={styles.titleStyle}
									bottomDivider
								/>
							))
						}
					</View>
				</Card>

				<Card containerStyle={styles.card}>
					<View>
						{
							list2.map((l, i) => (
								<ListItem
									key={i}
									leftIcon={{ name: l.icon, type: 'material'}}
									title={l.name}
									titleStyle={styles.titleStyle}
									bottomDivider
								/>
							))
						}
					</View>
				</Card>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	profileViewContainer: {
		flex: 1,
		backgroundColor: '#F5F6F9'
	}, 
	profileHeaderContainer: {
		flex: 1,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center'
	},
	username: {
		padding: 10,
		marginTop: 20,
		color: 'white',
		textAlign: 'center',
		textAlignVertical: 'center'
	},
	card: {
		padding: 0, 
		marginLeft: 0, 
		marginRight: 0, 
		marginTop: 0,
		marginBottom: 10 
	},
	avatar: {
		marginTop: 65
	},
	titleStyle: {
		fontSize: 14, 
		fontWeight: '400', 
		fontFamily: 'Raleway-Black'
	}
});

export default Profile;
