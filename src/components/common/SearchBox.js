import React, { Component, Fragment } from 'react';
import { StyleSheet, TextInput, View, Text, ScrollView, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { withNavigation } from 'react-navigation';
import { Icon, Button, ListItem } from 'react-native-elements';
import { Section } from './Section';

class SearchBox extends Component {
	state = {
		isModalVisible: false,
		active: false,
		sort: ['Nearest to me', 'From high to low', 'From low to high'],
		cuisine: ['American', 'Turkish', 'Asia', 'Fast food', 'Pizza', 'Desserts', 'Mexican', 'African'],
		filter: ['Open Now', 'Credit Cards', 'Free Delivery']
	};

  toggleModal = () => {
  	this.setState({ isModalVisible: !this.state.isModalVisible });
  };

	renderSortContent = () => (
		<Fragment>
			<Text style={styles.filterHeaderText}>SORT BY</Text>
			<View>
				{
					this.state.sort.map((data, index) => {
						return (
							<View key={index} style={styles.filterParamContainer}>
								<Text key={index}>{data}</Text>
							</View>
						);
					})
				}
			</View>		
		</Fragment>
	);

		renderFilterContent = () => (
			<Fragment>
				<Text style={styles.filterHeaderText}>FILTER</Text>
				<View>
					{
						this.state.filter.map((data, index) => {
							return (
								<View key={index} style={styles.filterParamContainer}>
									<Text key={index}>{data}</Text>
								</View>
							);
						})
					}
				</View>		
			</Fragment>
		);

		renderRangeSelector = () => (
			<Fragment>
				<Text  style={styles.filterHeaderText}>PRICE</Text>
			</Fragment>
		);

		renderCuisineContent = () => (
			<Fragment>
				<Text style={styles.filterHeaderText}>CUISINES</Text>
				<View style={styles.cuisineFilterContainer}>
					{
						this.state.cuisine.map((data, index) => {
							return (
								<Fragment key={index}>
									<Button
										key={index}
										buttonStyle={styles.modalButtonItem}
										type="outline"
										title={data}
										titleStyle={styles.modalButtonItemTitle}
										onPress={() => {
											this.props.navigation.navigate('Restaurants');
											this.setState({ isModalVisible: false});
										}}
									/>
								</Fragment>
							);
						})
					}
				</View>		
			</Fragment>
		);

	renderModalContent = () => (
		<Fragment>
			{this.renderCuisineContent()}
			{this.renderSortContent()}
			{this.renderFilterContent()}
			{this.renderRangeSelector()}
		</Fragment>
	);

	render() {
		const { searchBox, inputStyle, filterIcon } = styles;
		return (
			<View>
				<Section>
					<View style={searchBox}>
						<Section>
							<Icon name="search" color="#dedede" />
							<TextInput
								style={inputStyle}
								placeholder="Search"
								placeholderTextColor="#dedede"
							/>
						</Section>
					</View>
					<View style={filterIcon}>
						<Section>
							<Icon name="filter-list" color="#f8f8f8" onPress={this.toggleModal}/>
						</Section>
					</View>
				</Section>
				<View style={styles.modalContainer}>
					<Modal 
						coverScreen
						isVisible={this.state.isModalVisible} 
						onBackdropPress={() => this.setState({ isModalVisible: false })}
						style={styles.modalStyle}>
						<View style={styles.modalBodyStyle}>
							<View style={styles.modalBody}>
								<View style={styles.modalMenu}>
									<Text style={styles.modalMenuText}>Reset</Text>
									<Text style={styles.modalMenuText}>Filters</Text>
									<Text style={{...styles.modalMenuText, color: 'red'}} onPress={this.toggleModal}>Done</Text>
								</View>

								<ScrollView>
									<View style={styles.modalItemsContainer}>
										{this.renderModalContent()}
									</View>
								</ScrollView>
							</View>	
						
						</View>
					</Modal>
      	</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	filterHeaderText: {
		padding: 10, 
		color: '#9E9E9E'
	},
	cuisineFilterContainer: {
		flex: 1, 
		flexDirection: 'row', 
		flexWrap: 'wrap', 
		padding: 10
	},
	filterParamContainer: {
		padding: 15, 
		flex: 1, 
		borderBottomColor: '#dedede', 
		borderBottomWidth: 1
	},
	modalContainer: {
		flex: 1
	},
	modalStyle: {
		margin:  0, 
		borderTopLeftRadius: 80, 
		borderTopRightRadius: 80
	},
	modalBodyStyle: {
		flex: 1, 
		backgroundColor: 'white', 
		marginTop: 180, 
		borderTopLeftRadius: 25, 
		borderTopRightRadius: 25
	},
	modalBody: {
		marginTop: 30
	},
	modalItemsContainer: {
		flex: 1
	},
	modalMenu: {
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'space-between',
		borderBottomColor: '#dedede',
		borderBottomWidth: 1,
		padding: 18
	},
	modalMenuText: {
		fontSize: 16
	},
	modalButtonItem: {
		flex: 1,
		marginRight: 5,
		marginLeft: 5,
		marginTop: 5,
		marginBottom: 5,
		borderRadius: 30,
		borderColor: '#dedede'
	},
	modalButtonItemTitle: {
		fontSize: 11,
		fontWeight: '600',
		color: '#9E9E9E'
	},
	searchBox: {
		borderColor: '#dedede',
		borderWidth: 1,
		borderRadius: 28,
		flex: 2
	},
	inputStyle: {
		color: '#696464',
		paddingRight: 5,
		paddingLeft: 5,
		paddingBottom: 5,
		fontSize: 14,
		lineHeight: 20,
	},
	filterIcon: {
		padding: 3,
		backgroundColor: '#C7CAD1',
		borderRadius: 120,
		margin: 3,
	}
});

export default withNavigation(SearchBox);
