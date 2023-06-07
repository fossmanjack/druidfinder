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
			console.log('myDataSlice: setMyCoords:', action.payload);
			const [ inputLat, inputLon ] = action.payload;

			return {
				...mState,
				myCoords: [ parseFloat(inputLat), parseFloat(inputLon) ]
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
