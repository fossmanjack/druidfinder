import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { setMyCoords } from '../slices/mydataSlice';

export default function SearchBar() {
	// input value for the search bar
	const [ input, setInput ] = useState('');
	//const [ buttonClicked, setButtonClicked ] = useState(false);
	// dispatch, needed to store coordinates in Redux
	const dispatch = useDispatch();

	// options for API fetch -- deprecated once we get a thunk in place
	const fetchOpts = {
	};

	const APIKEY = '3f46e39cd45519b4532a9e3fc26f1f44';
	const APIURL = `https://geocode.maps.co/search?q={${input}}`;
	//const APIURL = `https://api.positionstack.com/v1/forward?access_key=${APIKEY}&query=${input}`

	// Async function to fetch coordinates from the input string using geocode.maps.co public API
	const fetchMyCoords = async _ => {
		console.log('fetchMyCoords input', input);
		try {
			const response = await fetch(APIURL, fetchOpts);
			const jsonData = await response.json();

			console.log('SearchBar: received jsonData', jsonData);

			const { lat, lon } = jsonData['0'] ?? { lat: 39.76, lon: -98.50 };

			dispatch(setMyCoords([ lat, lon ]));
		} catch(error) {
			console.error('fetchMyCoords: fetch failed:', error);
		}
	};

	return (
		<Form>
			<Form.Group controlId='searchBar'>
				<Form.Control
					type='text'
					placeholder='Enter postal code'
					onChange={e => setInput(e.target.value)}
					value={input}
				/>
			</Form.Group>
			<Button
				onClick={_ => fetchMyCoords()}
			>
				Search
			</Button>
		</Form>
	);
}
