import { createSlice } from '@reduxjs/toolkit';
import { DEFAULTGROVES } from '../data/DEFAULT';

const initialState = {
	groveList: DEFAULTGROVES,
	filteredList: [ ],
	orgList: {
		ADF: {
			founded: '1983',
			membership: '~1500',
			website: 'https://www.adf.org',
		},
		AODA: {
			founded: '1874',
			membership: '~1000',
			website: 'https://www.aoda.org',
		},
		RDNA: {
			founded: '1963',
			membership: '~4500',
			website: 'https://rdna.info',
		},
		RDG: {
			founded: '2005',
			membership: '~200',
			website: '',
		},
		BDO: {
			founded: '1979',
			membership: '??',
			website: '',
		},
		HoK: {
			founded: '1986',
			membership: '~500',
			website: '',
		},
		OBOD: {
			founded: '1964',
			membership: '25,000',
			website: 'https://www.druidry.org',
		},
		NOD: {
			founded: '2004',
			membership: '~5000',
			website: 'https://www.druidcircle.org',
		},
		DANA: {
			founded: '2019',
			membership: '153',
			website: 'https://www.druidalliance.org',
		},
		NRDNA: {
			founded: '1976',
			membership: '33',
			website: '',
		},
	},
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
