import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
import { orders } from './fixture';

const renderRow = (order, index) => {
	return (
		<Card key={index}>
			<View style={styles.cardContent}>
				<View style={styles.cardContentSubView}>
					<View style={styles.cardRow}>
						<Icon
							name='truck'
							type='font-awesome'
							iconStyle={styles.iconStyle}
						/>
						<View style={styles.orderExtras}>
							<Text style={styles.orderId}>Order No - {order.id}</Text>
							<View style={
								order.status === 'completed'
									? styles.orderStatusContainer 
									: styles.orderStatusContainerCancelled
							}>
								<Text style={styles.orderStatus}>{order.status}</Text>
							</View>
						</View>
					</View>
					<Text style={styles.orderTotal}>$ {order.total}</Text> 
				</View>

				<View style={styles.cardRow2}>
					{
						order.orders.map((item, index) => {
							return (
								<View key={index} style={styles.cardRow2Content}>
									<Text key={index +1} style={styles.cardRow2ContentLabel}>{item.name}</Text>
									<Text key={index + 2} style={styles.cardRow2ContentLabel}>Qty: {item.quantity}</Text>
									<Text key={index +3} style={styles.cardRow2ContentLabel}>$ {item.price}</Text>
								</View>
							);
						})
					}
				</View>
				{
				// 	<View style={styles.buttonContainer}>
				// 	<Button
				// 		title="Cancel order"
				// 		titleStyle={styles.buttonTitleStyle}
				// 		type="outline"
				// 		buttonStyle={styles.buttonStyle}
				// 	/>
				// 	<Button
				// 		title="Track order"
				// 		titleStyle={styles.buttonTitleStyle}
				// 		type="outline"
				// 		buttonStyle={styles.buttonStyle}
				// 	/>
				// </View>
				}
			</View>
		</Card>
	);
};
const CompletedOrders = () => {
	return (
		<ScrollView>
			{
				orders.map((order, index) => {
					return (
						renderRow(order, index)
					);
				})
			}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	cardContent: {
		padding: 10
	}, 
	cardContentSubView: {
		flexDirection: 'row', 
		justifyContent: 'space-between'
	},
	cardRow: {
		flexDirection: 'row'
	},
	iconStyle: {
		padding: 10
	},
	orderExtras: {
		padding: 5
	},
	orderId: {
		padding: 3
	},
	orderStatusContainerCancelled: {
		borderColor: '#F93963', 
		borderRadius: 5, 
		borderWidth: 1, 
		backgroundColor: '#F93963'
	},
	orderStatusContainer: {
		borderColor: '#0E825A', 
		borderRadius: 5, 
		borderWidth: 1, 
		backgroundColor: '#0E825A'
	},
	orderStatus: {
		color: 'white', 
		padding: 3, 
		maxWidth: 150, 
		fontSize: 11, 
		textAlign: 'center'
	},
	orderTotal: {
		padding: 5, 
		color: '#F93963' 
	},
	cardRow2: {
		padding: 5
	},
	cardRow2Content: {
		flexDirection: 'row', 
		justifyContent: 'space-between'
	},
	cardRow2ContentLabel: {
		padding: 5, 
		fontSize: 10 
	},
	buttonContainer: {
		padding: 5, 
		flexDirection: 'row', 
		justifyContent: 'space-between'
	},
	buttonTitleStyle: {
		fontSize: 11, 
		color: '#000'
	},
	buttonStyle: {
		borderColor: '#000'
	}
});

export default CompletedOrders;
