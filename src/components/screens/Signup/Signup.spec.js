/**
 * @format
 */

import 'react-native';
import React from 'react';
import Login from './Login';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders login correctly', () => {
  renderer.create(<Login />);
});
