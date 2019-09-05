/* eslint-disable no-undef */
/**
 * @format
 */

import 'react-native';
import React from 'react';
import SignUp from './';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders SignUp correctly', () => {
	renderer.create(<SignUp />);
});
