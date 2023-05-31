import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	orgFilter: [ 'ADF', 'AODA', 'RDNA', 'RDG', 'BDO', 'HoK', 'OBOD', 'NOD', 'DANA', 'NRDNA' ],
	units: 'imperial',
	theme: 'light',

};

export const optionsSlice = createSlice({
	name: 'options',
	initialState,
	reducers: {
		setOrgFilter: (oState, action) => oState.orgFilter = action.payload,
		toggleOrgFilter: (oState, action) => {
			let newFilters;

			// if the action.payload is in the orgFilters, remove it
			if(oState.orgFilter.includes(action.payload))
				newFilters = oState.orgFilter.filter(org => org !== action.payload);
			// otherwise add it
			else newFilters = [ ...oState.orgFilter, action.payload ];

			return {
				...oState,
				orgFilter: newFilters
			};
		},
		setUnits: (oState, action) => {
			// Restrict allowed unit schema
			if(![ 'metric', 'imperial' ].includes(action.payload)) return oState;

			return {
				...oState,
				units: action.payload
			};
		},
		setTheme: (oState, action) => {
			// Restrict allowed themes
			if(![ 'light', 'dark' ].includes(action.payload)) return oState;

			return {
				...oState,
				theme: action.payload
			};
		},

	},

});

export const optionsReducer = optionsSlice.reducer;

export const {
	setOrgFilter,
	toggleOrgFilter
} = optionsSlice.actions;


