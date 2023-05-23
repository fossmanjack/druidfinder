// Main.jsx
// Container for app
// P3Soft, 2023-05-20

// Local styles
import '../css/localstyles.css';

// React and Redux
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	Col,
	Container,
	Row
} from 'react-bootstrap';

// Local components
import GroveList from '../components/GroveList';
import GroveMap from '../components/GroveMap';

// Utils and slices
import * as GL from '../slices/grovelistSlice';
import getDistance from '../utils/getDistance';

export default function Main() {
	const { groveList } = useSelector(S => S.grovelist);
	const { myCoords } = useSelector(S => S.mydata);
	const { orgFilter } = useSelector(S => S.options);
	const dispatch = useDispatch();

	// We can't use the list data directly because we want to sort by distance
	// and filter by org.  So we'll build our modified list here and store it
	// in Redux so the map and list components have access.

	const buildFilteredList = _ => {
		console.log('Main: buildFilteredList');
		const sortList = [ ];

		for(const grove of groveList) {
			const distance = getDistance(myCoords, grove.coords);
			sortList.push([ grove, distance ]);
		}

		// Since affiliation is an array and the orgs included is also an array,
		// we can filter out anything that doesn't share a match using array.some()
		sortList.filter(data => data[0].affiliation.some(org => orgFilter.includes(org)));

		// Sort by distance, ascending
		sortList.sort((a, b) => a[1] - b[1]);

		// Store the list built in Redux
		dispatch(GL.setFilteredList(sortList));
	};

	// Every time location or filters change, rebuild list
	useEffect(_ => buildFilteredList(), [ myCoords, orgFilter ]);

	// Initialize list -- should only be called on load
	useEffect(_ => buildFilteredList(), []);

	return (

		<Container fluid className='h-100'>
			<Row className='h-100'>
				<Col md={3}>
					<GroveList />
				</Col>
				<Col>
					<GroveMap />
				</Col>
			</Row>
		</Container>
	);
}


/* Old code


	useEffect(_ => {
		buildFilteredList();
		const myCoords = { latitude: myLat, longitude: myLng };
		const sortList = [ ];
		for(const grove of groveList) {
			sortList.push([ grove, getDistance(myCoords, grove.coords) ]);
		};

		sortList.filter(

		sortList.sort((a, b) => a[1] - b[1]);

		dispatch(GL.setFilteredList(sortList));
	}, []);



*/
