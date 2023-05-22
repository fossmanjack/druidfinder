import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	orgFilter: [ 'ADF', 'AODA', 'RDNA', 'RDG' ],

};

export const optionsSlice = createSlice({
	name: 'options',
	initialState,
	reducers: {
		setOrgFilter: (oState, action) => oState.orgFilter = action.payload,
	},

});

export const optionsReducer = optionsSlice.reducer;

export const {
	setOrgFilter
} = optionsSlice.actions;


