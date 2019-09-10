import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Input, Button, Card } from 'react-native-elements';
import { Section } from '../../common';

const UserDetails = () => {
	return (
		<ScrollView style={styles.scrollView}>
			<View style={styles.main}>
				<Card style={styles.card}>
					<Section sectionStyle={styles.section}>
						<Input
							style={styles.input}
							label='FIRST NAME'
							labelStyle={styles.inputLabel}
							placeholder='First Name'
						/>
					</Section>
					<Section sectionStyle={styles.section}>
						<Input
							style={styles.input}
							label='LAST NAME'
							labelStyle={styles.inputLabel}
							placeholder='Last Name'
						/>
					</Section>
					<Section sectionStyle={styles.section}>
						<Input
							style={styles.input}
							label='EMAIL'
							labelStyle={styles.inputLabel}
							placeholder='Email'
						/>
					</Section>
					<Section sectionStyle={styles.section}>
						<Input
							style={styles.input}
							label='DATE OF BIRTH'
							labelStyle={styles.inputLabel}
							placeholder='Date of birth'
						/>
					</Section>
					<Section sectionStyle={styles.section}>
						<Input
							style={styles.input}
							label='SEX'
							labelStyle={styles.inputLabel}
							placeholder='Male'
							rightIcon={{ type: 'feather', name: 'chevron-down' }}
						/>
					</Section>
					<Button
						title="SAVE CHANGES"
						buttonStyle={styles.button}
					
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
		margin: 5
	},
	button: {
		margin: 20, 
		backgroundColor: 'gray'
	}
});

export default UserDetails;
