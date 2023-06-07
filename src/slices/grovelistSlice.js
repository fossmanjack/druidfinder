import { createSlice } from '@reduxjs/toolkit';
import { DEFAULTGROVES } from '../data/DEFAULT';
import { ORGLIST } from '../data/ORGLIST';

const initialState = {
	groveList: DEFAULTGROVES,
	filteredList: [ ],
	orgList: ORGLIST,
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
