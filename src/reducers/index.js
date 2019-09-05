import { combineReducers } from 'redux';

const INITIAL_STATE = {
};

const sampleReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	default:
		return state;
	}
};

const reducer = combineReducers({
	friends: sampleReducer
});

export default reducer;
