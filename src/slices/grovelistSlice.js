import { createSlice } from '@reduxjs/toolkit';
import { DEFAULTGROVES } from '../data/DEFAULT';

const initialState = {
	groveList: DEFAULTGROVES,
	filteredList: [ ],
}

const grovelistSlice = createSlice({
	name: 'grovelist',
	initialState,
	reducers: {
		setGroveList: (gState, action) => gState.groveList = action.payload,
		setFilteredList: (gState, action) => {
			return {
				...gState,
				filteredList: action.payload
			};
		},

	},
	extraReducers: {

	},
});

export const grovelistReducer = grovelistSlice.reducer;

export const {
	setGroveList,
	setFilteredList
} = grovelistSlice.actions;
