import { configureStore } from '@reduxjs/toolkit';
import { grovelistReducer } from '../slices/grovelistSlice';
import { mydataReducer } from '../slices/mydataSlice';
import { mapctlReducer } from '../slices/mapctlSlice';
import { optionsReducer } from '../slices/optionsSlice';

export const _Store = configureStore({
	reducer: {
		grovelist: grovelistReducer,
		mydata: mydataReducer,
		mapctl: mapctlReducer,
		options: optionsReducer,
	},
});
