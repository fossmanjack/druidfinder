import { DEFAULTGROVES } from '../data/DEFAULT.js';
import { Accordion, Button, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import GroveCard from './GroveCard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { toggleOrgFilter } from '../slices/optionsSlice';

export default function GroveList() {
	const { filteredList, orgList } = useSelector(S => S.grovelist);
	const { orgFilter } = useSelector(S => S.options);

	const orgListKeys = Object.keys(orgList);
	const dispatch = useDispatch();

	const OrgTag = props => {
		const { orgTag } = props;

		return (
			<Button
				variant={orgFilter.includes(orgTag) ? 'primary' : 'secondary'}
				onClick={_ => dispatch(toggleOrgFilter(orgTag))}
				style={{ width: '40%', margin: 1 }}
			>
				{orgTag}
			</Button>
		);
	};

	return (
		<Accordion flush alwaysOpen defaultActiveKey={[]}>
			<Accordion.Item eventKey='accordionHeader'>
				<Accordion.Header>
					<SearchBar />
				</Accordion.Header>
				<Accordion.Body>
					{
						orgListKeys.map(org => <OrgTag orgTag={org} key={org} />)
					}
				</Accordion.Body>
			</Accordion.Item>
			{
				filteredList.map(grove => <GroveCard grove={grove} key={grove[0].id} />)
			}
		</Accordion>
	);
}

/* OLD CODE



	// FlatList is for React Native; we have to roll our own here using
	// filter() and map() on DEFAULTGROVES

	const listItems = DEFAULTGROVES.map(grove =>

			<Container>
				<Row>
					<Col>
						{grove.name}
					</Col>
				</Row>
			</Container>
		);

	const listItems = DEFAULTGROVES.map(grove => <GroveCard grove={grove} />);

	return (
		<ul>{listItems}</ul>
	);

	const GroveCard = ({ grove }) => {
		console.log('GroveCard called with id:', grove.id);
		return (
			<Accordion.Item eventKey={grove.id}>
			</Accordion.Item>
		);
	}

	return (
		<Accordion flush>
			{
				DEFAULTGROVES.map(grove => <GroveCard grove={grove} />)
			}
		</Accordion>
	);

	return (
		<Accordion flush>
			<Accordion.Item eventKey="accordionHeader">
				<Accordion.Header>
					Search and filters
				</Accordion.Header>
				<Accordion.Body>
					Filters!
				</Accordion.Body>
			</Accordion.Item>
			{
				DEFAULTGROVES.map(grove => {
					console.log('GroveList loop called with id:', grove.id);

					return (
						<Accordion.Item eventKey={grove.id}>
							<Accordion.Header>
								{grove.name}
							</Accordion.Header>
							<Accordion.Body>
								Filler content
							</Accordion.Body>
						</Accordion.Item>
					);
				})
			}
		</Accordion>
	);

	const [ loc, setLoc ] = useState('');
	const [ groveList, setGroveList ] = useState([]);
	const [ orgFilters, setOrgFilters ] = useState({
		aoda: true,
		adf: true,
		rdna: true,
		rdg: true,
		obod: true,
		bdo: true,
		dana: true
	});

	useEffect(_ => setGroveList(DEFAULTGROVES), []);

	useEffect(_ => {
		// Change groveList based on filters and location and sort
		// based on distance
		// NYI
	}, [ loc, orgFilters ]);

	const toggleOrg = org => {
		setOrgFilters({
			...orgFilters,
			[org]: !orgFilters[org]
		});
	};

	const OrgChip = org => {


	}

*/
