import { GET_DATA } from '../actions/index';

const reducer = (state, action) => {
	switch (action.type) {
    case GET_DATA:
			return {...state, data: action.data};
		default:
			return state;
	}
};

export default reducer;
