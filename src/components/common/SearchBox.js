import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Section } from './Section';
import { Icon } from 'react-native-elements';

const SearchBox = () => {
	const { searchBox, inputStyle, filterIcon } = styles;
	return (
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
			<View style={filterIcon} >
				<Section>
					<Icon name="filter-list" color="#dedede" />
				</Section>
			</View>
		</Section>
	);
};

const styles = StyleSheet.create({
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
		backgroundColor: 'grey',
		borderRadius: 100,
		margin: 3,
	}
});

export { SearchBox };
