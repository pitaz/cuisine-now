import React from 'react';
import { View, TextInput } from 'react-native';

const Input = ({ value, onChangeText, placeholder, placeholderTextColor, secureTextEntry }) => {
	const { inputStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				placeholderTextColor={placeholderTextColor}
				autoCorrect={false}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#fff',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Input };
