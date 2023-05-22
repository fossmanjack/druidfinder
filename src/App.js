import logo from './logo.svg';
import './App.css';
import './css/localstyles.css';
import { Map, Marker } from 'pigeon-maps';
import { useState } from 'react';
import {
	Container,
	Row,
	Col
} from 'react-bootstrap';
import GroveList from './components/GroveList.jsx';
import { DEFAULTGROVES } from './data/DEFAULT';

function App() {
//	const [ lat, setLat ] = useState(29.425191);
//	const [ long, setLong ] = useState(-98.494592);
	const [ lat, setLat ] = useState(39.76);
	const [ long, setLong ] = useState(-98.5);

/*
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<Map height={300} defaultCenter={[ lat, long ]} defaultZoom={11}>
			</Map>
		</div>
	);
*/
	const GroveMarker = ({ grove }) => {
		console.log('GroveMarker: Grove with id', grove.id);
		const org = grove.affiliation[0] ?? 'None';

		let color;

		switch(org) {
			case 'AODA': color = 'green'; break;
			case 'RDNA': color = 'yellow'; break;
			case 'ADF': color = 'red'; break;
			default: color = 'grey';
		};

		console.log('GroveMarker:', org, color);

		return (
			<Marker
				width={30}
				anchor={[ grove.coords.latitude, grove.coords.longitude ]}
				color={color}
			/>
		);
	};

/*
	return (
		<div className='App'>
			<Container fluid className='h-100'>
				<Row className='h-100'>
					<Col md={3}>
						<GroveList />
					</Col>
					<Col>
						<Map defaultCenter={[ lat, long ]} defaultZoom={4}>
							{
								DEFAULTGROVES.map(grove =>
									<Marker
										width={50}
										anchor={[ grove.coords.latitude, grove.coords.longitude ]}
									/>
								)
							}
						</Map>
					</Col>
				</Row>
			</Container>

		</div>
	);
*/
	return (
		<div className='App'>
			<Container fluid className='h-100'>
				<Row className='h-100'>
					<Col md={3}>
						<GroveList />
					</Col>
					<Col>
						<Map defaultCenter={[ lat, long ]} defaultZoom={4}>
							{
								DEFAULTGROVES.map(grove => <GroveMarker grove={grove} />)
							}
						</Map>
					</Col>
				</Row>
			</Container>

		</div>
	);
}


export default App;
