import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight,
	},
	scene: {
		flex: 1,
		height: 200
	},
	contentContainer: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: '#F5F6F9',
		marginBottom: 20
	},
	image: {
		flex: 1,
		width: '100%',
		height: 250,
		marginTop: 0,
	},
	iconColumnContainer: {
		flex: 1,
		width: '100%',
		justifyContent: 'flex-end',
		marginBottom: (-30)
	},
	iconRow: {
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	iconStyle: {
		position: 'absolute'
	},
	mealnameExtras: {
		flexDirection: 'row'
	}, 
	mealnameExtrasContent: {
		flex: 1,
		width: '100%',
		justifyContent: 'flex-end',
	},
	mealName: {
		fontSize: 20,
		fontWeight: '500',
		padding: 5
	}, 
	mealRestaurant: {
		fontSize: 16,
		fontWeight: '500',
		padding: 5
	},
	ratings: {
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		margin: 0,
		padding: 5
	},
	productCountContainer: {
		flexDirection: 'row'
	},
	countActionButton: {
		padding: 3,
		fontSize: 18
	},
	input: {
		marginLeft: 20,
		marginRight: 20
	}, 
	inputContainer: {
		width: '30%',
	},
	price: {
		fontSize: 20,
		fontWeight: '500',
		marginTop: 20,
		padding: 5
	},
	mealDetail: {
		padding: 20
	},
	tabIndicator: {
		backgroundColor: 'black' 
	}, 
	tabStyle: {
		backgroundColor: 'white', color: 'black' 
	},
	tabLabel: {
		color: 'black'
	},
	buttonContainer: {
		padding: 20,
	},
	button: {
		backgroundColor: '#F93963'
	}
});
