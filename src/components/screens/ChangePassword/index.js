import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Input, Button, Card } from 'react-native-elements';
import { Section } from '../../common';

const ChangePassword = () => {
	return (
		<ScrollView style={styles.scrollView}>
			<View style={styles.main}>
				<Card style={styles.card}>
					<Section sectionStyle={styles.section}>
						<Input
							style={styles.input}
							label='CURRENT PASSWORD'
							labelStyle={styles.inputLabel}
							placeholder='Current password'
						/>
					</Section>
					<Section sectionStyle={styles.section}>
						<Input
							style={styles.input}
							label='NEW PASSWORD'
							labelStyle={styles.inputLabel}
							placeholder='New password'
						/>
					</Section>
					<Button
						title="SAVE PASSWORD"
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

export default ChangePassword;
