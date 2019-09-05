import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './Navigation';
import configureStore from './store';

const store = configureStore();

const App = () => {
	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
	);
};

export default App;
