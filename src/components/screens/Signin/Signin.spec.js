/* eslint-disable no-undef */
import 'react-native';
import React from 'react';
import SignIn from './';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders SignIn correctly', () => {
	renderer.create(<SignIn />);
});
