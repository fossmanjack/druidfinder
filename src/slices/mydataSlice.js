import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	myLocationString: '',
	myCoords: [ 39.76, -98.50 ],
};

const mydataSlice = createSlice({
	name: 'mydata',
	initialState,
	reducers: {
		setMyLocationString: (mState, action) => mState.myLocationString = action.payload,
		setMyCoords: (mState, action) => {
			return {
				...mState,
				myCoords: action.payload
			};
		},
		resetMyData: (mState, action) => initialState,

	},
	extraReducers: {

	},
});

export const mydataReducer = mydataSlice.reducer;

export const {
	setMyLocationString,
	setMyCoords,
	resetMyData
} = mydataSlice.actions;
