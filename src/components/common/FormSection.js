import React from 'react';
import { View } from 'react-native';

const FormSection = ({ children, formStyle }) => {
  const style= {
    ...styles.buttonContainerStyle,
    ...formStyle
  }

  return (
    <View style={style}>
      {children}
    </View>
  );
};

const styles = {
  buttonContainerStyle: {
    flexDirection: 'row',
    padding: 5,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    position: 'relative',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  },
};

export { FormSection };
