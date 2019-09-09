import React from 'react';
import { View, Text, ScrollView, ImageBackground } from 'react-native';
import { Avatar, ListItem, Card } from 'react-native-elements';
import { list } from './fixtures';

const Profile = () => {
	return (
		<ScrollView>
			<View style={{
				flex: 1,
				// padding: 10,
				marginTop: 50,
				backgroundColor: '#F5F6F9'
			}}>
				<View style={{
					flex: 1,
					height: 150,
					backgroundColor: 'black',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					<Avatar
						size="large"  
						rounded 
            title="JD"
            containerStyle={{ marginTop: 15}} />
					<Text style={{
						padding: 10,
						marginTop: 20,
						color: 'white',
						textAlign: 'center',
						textAlignVertical: 'center'
					}}>John Doe</Text>
				</View>
				<Card containerStyle={{padding: 0, marginLeft: 0, marginRight: 0, marginTop: 0}}>
					<View>
						{
							list.map((l, i) => (
								<ListItem
									key={i}
									leftIcon={{ name: l.icon, type: 'material' }}
									title={l.name}
									bottomDivider
								/>
							))
						}
					</View>
				</Card>

				<Card containerStyle={{padding: 0, marginLeft: 0, marginRight: 0, marginTop: 10}}>
					<View style={{ marginTop: 10}}>
						{
							list.map((l, i) => (
								<ListItem
									key={i}
									leftIcon={{ name: l.icon, type: 'material' }}
									title={l.name}
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

export default Profile;
