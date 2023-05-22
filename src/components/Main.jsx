import {
	Col,
	Container,
	Row
} from 'react-bootstrap';
import GroveList from '../components/GroveList';
import GroveMap from '../components/GroveMap';
import '../css/localstyles.css';
import * as GL from '../slices/grovelistSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import getDistance from '../utils/getDistance';

export default function Main() {
	const { groveList } = useSelector(S => S.grovelist);
	const { myLat, myLng } = useSelector(S => S.mydata);
	const { orgFilter } = useSelector(S => S.options);
	const dispatch = useDispatch();

	const buildFilteredList = _ => {
		console.log('Main: buildFilteredList');
		const myCoords = { latitude: myLat, longitude: myLng };
		const sortList = [ ];

		for(const grove of groveList) {
			sortList.push([ grove, getDistance(myCoords, grove.coords) ]);
		}

		sortList.filter(data => data[0].affiliation.some(org => orgFilter.includes(org)));
		sortList.sort((a, b) => a[1] - b[1]);

		dispatch(GL.setFilteredList(sortList));
	};

	useEffect(buildFilteredList(), [ myLat, myLng, orgFilter ]);

/*
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
	buildFilteredList();

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
