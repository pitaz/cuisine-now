import React from 'react';
import { View } from 'react-native';

const Section = (props) => {
	const { children, sectionStyle } = props;
	const { containerStyle } = styles;
	let style = 
  {
  	...containerStyle,
  	...sectionStyle
  };

	return (
		<View style={style}>
			{children}
		</View>
	);
};

const styles = {
	containerStyle: {
		flexDirection: 'row',
		padding: 5,
		justifyContent: 'flex-start',
		position: 'relative',
		marginLeft: 5,
		marginRight: 5,
		marginTop: 5
	},
};

export { Section };
