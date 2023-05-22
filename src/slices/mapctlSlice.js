import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	mapLat: 39.76,
	mapLng: -98.50,
	zoom: 4,
};

const mapctlSlice = createSlice({
	name: 'mapctl',
	initialState,
	reducers: {
		setLat: (mState, action) => mState.mapLat = action.payload,
		setLng: (mState, action) => mState.mapLng = action.payload,
		setZoom: (mState, action) => mState.zoom = action.payload,
	},
});

export const mapctlReducer = mapctlSlice.reducer;

export const {
	setLat,
	setLng,
	setZoom
} = mapctlSlice.actions;
