import * as constant from './constants';

const initialState = {
	field: new Array(9).fill(''),
	status: constant.STATUS_MOVES,
	currentPlayer: constant.FIRST_PLAYER,
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_FIELD':
			return {
				...state,
				field: payload,
			};
		case 'SET_STATUS':
			return {
				...state,
				status: payload,
			};
		case 'SET_CURRENT_PLAYER':
			return {
				...state,
				currentPlayer: payload,
			};
		case 'INITIAL':
			return initialState;
		default:
			return state;
	}
};
