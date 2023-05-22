import { configureStore } from '@reduxjs/toolkit';
import { grovelistReducer } from '../slices/grovelistSlice';
import { mydataReducer } from '../slices/mydataSlice';
import { mapctlReducer } from '../slices/mapctlSlice';

export const _Store = configureStore({
	reducer: {
		grovelist: grovelistReducer,
		mydata: mydataReducer,
		mapctl: mapctlReducer,
	},
});
