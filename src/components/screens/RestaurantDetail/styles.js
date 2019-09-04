import { StyleSheet} from 'react-native'; 

const styles = StyleSheet.create({
	headerBackgroundImage: {
		flex: 1,
		width: '100%',
		marginTop: 0,
	},
	headerMenuContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 50,
	},
	backIconStyle: {
		padding: 10,
		fontSize: 25
	},
	rightHeaderIconsContainer: {
		flexDirection: 'row',
	},
	locationContainer: {
		padding: 3, 
		flexDirection: 'row'
	},
	deliveryTextContainer: {
		backgroundColor: '#F93963', 
		flexDirection: 'row', 
		width: 90, 
		borderRadius: 25, 
		margin: 5, 
		paddingLeft: 5
	},
	deliveryText: {
		padding: 3, 
		fontSize: 11, 
		color: '#fff', 
		justifyContent: 'flex-start', 
		textAlign: 'center',
	},
	menuName: {
		padding: 3, 
		fontSize: 38, 
		color: '#fff', 
		fontWeight: '400',
		fontFamily: 'Raleway-Black', 
	},
	cuisineLocationIcon: {
		padding: 3, 
		fontSize: 13, 
		color: '#fff'
	},
	cuisineLocation: {
		padding: 3, 
		fontSize: 13, 
		color: '#fff'
	},
	menuExtrasSection: {
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		margin: 10, 
		borderTopWidth: 1, 
		borderTopColor: 'white'
	},
	menuExtrasText: {
		padding: 3, 
		color: '#fff', 
		borderRightWidth: 1, 
		borderRightColor: '#fff', 
		textAlign: 'center',
		fontWeight: 'bold',
		fontFamily: 'Raleway-Black', 
	},
	orderContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#f8bbd0'
	},
	container: {
		flex: 1,
		paddingTop: 10,
	},
	title: {
		textAlign: 'center',
		fontSize: 22,
		fontWeight: '300',
		marginBottom: 20,
	},
	header: {
		padding: 10,
	},
	headerText: {
		fontSize: 16,
		fontWeight: '500',
		fontFamily: 'Raleway-Black', 
		color: '#26315F'
	},
	countText: {
		fontSize: 16,
		fontWeight: '500',
		fontFamily: 'Raleway-Black', 
		color: '#C7CAD1'
	},
	content: {
		padding: 20,
		backgroundColor: '#fff',
	},
	selectors: {
		marginBottom: 10,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	selector: {
		backgroundColor: '#F5FCFF',
		padding: 10,
	},
	activeSelector: {
		fontWeight: 'bold',
	},
	selectTitle: {
		fontSize: 14,
		fontWeight: '500',
		padding: 10,
	},
	multipleToggle: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: 30,
		alignItems: 'center',
	},
	multipleToggle__title: {
		fontSize: 16,
		marginRight: 8,
	},
	expandableListContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomColor: '#C7CAD1',
		borderBottomWidth: 1
	},
	expandableListHeaderContainer: {
		flexDirection: 'row',
	},
	newOrderAlertContainer: {
		padding: 20, 
		width: 250
	},
	newOrderAlertText1: {
		color: '#F93963'
	},
	newOrderAlertText2: {
		color: '#26315F'
	},
	newOrderAlertButtonContainer: {
		padding: 20
	},
	newOrderAlertButtonText: {
		alignSelf: 'center',
		color: '#fff',
		fontSize: 16,
		padding: 10
	},
	newOrderAlertButton: {
		alignSelf: 'stretch',
		backgroundColor: '#F93963',
		borderRadius: 5,
		marginLeft: 5,
		marginRight: 5
	},
	featuredItems: {
		fontSize: 20, 
		paddingLeft: 10, 
		paddingRight: 20, 
		paddingBottom: 20, 
		paddingTop: 10, 
		color: '#26315F'
	},
	featuredItemsContainer: {
		flexDirection: 'row'
	},
	featuredItemsSection: {
		padding: 10
	},
	featuredItemImage: {
		width: 200, 
		height: 120, 
		borderRadius: 15
	},
	featuredItemPrice: {
		fontSize: 12, 
		fontWeight: '400', 
		color: '#C7CAD1'
	},
	featuredItemName: {
		fontSize: 16, 
		fontWeight: '400', 
		marginTop: 20, 
		color: '#26315F' 
	},
	fullMenuTextContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	fullMenuText: {
		fontSize: 20,
		paddingLeft: 10, 
		paddingRight: 20, 
		paddingBottom: 20, 
		paddingTop: 10, 
		color: '#26315F'
	},
	accordionContainer: {
		paddingTop: 10, 
		margin: 5 
	}
});

export default styles;
