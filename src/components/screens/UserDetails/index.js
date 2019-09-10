import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Input, Button, Card } from 'react-native-elements';
import { Section } from '../../common';

const UserDetails = () => {
	return (
		<ScrollView style={{ backgroundColor: '#F5F6F9'}}>
			<View style={{margin: 5}}>
				<Card style={styles.card}>
					<Section sectionStyle={styles.section}>
						<Input
							style={{padding: 10, fontSize: 11}}
							label='FIRST NAME'
							labelStyle={{fontSize: 11}}
							placeholder='First Name'
						/>
					</Section>
					<Section sectionStyle={styles.section}>
						<Input
							style={{padding: 10, fontSize: 11}}
							label='LAST NAME'
							labelStyle={{fontSize: 11}}
							placeholder='Last Name'
						/>
					</Section>
					<Section sectionStyle={styles.section}>
						<Input
							style={{padding: 10, fontSize: 11}}
							label='EMAIL'
							labelStyle={{fontSize: 11}}
							placeholder='Email'
						/>
					</Section>
					<Section sectionStyle={styles.section}>
						<Input
							style={{padding: 10, fontSize: 11}}
							label='DATE OF BIRTH'
							labelStyle={{fontSize: 11}}
							placeholder='Date of birth'
						/>
					</Section>
					<Section sectionStyle={styles.section}>
						<Input
							style={{padding: 10, fontSize: 11}}
							label='SEX'
							labelStyle={{fontSize: 11}}
							placeholder='Date of birth'
						/>
					</Section>
					<Button
						title="SAVE CHANGES"
						buttonStyle={{margin: 20, backgroundColor: 'gray'}}
					
					/>
				</Card>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	section: {
		// padding: 5,
	},
	label: {
		fontSize: 11
	},
	card: {
		padding: 0, 
		marginLeft: 0, 
		marginRight: 0, 
		marginTop: 0,
		marginBottom: 10 
	},
});

export default UserDetails;
