import logo from './logo.svg';
import './App.css';
import './css/localstyles.css';
import { Map } from 'pigeon-maps';
import { useState } from 'react';
import {
	Container,
	Row,
	Col
} from 'reactstrap';
import GroveList from './components/GroveList.jsx';

function App() {
	const [ lat, setLat ] = useState(29.425191);
	const [ long, setLong ] = useState(-98.494592);

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

	return (
		<div className='App'>
			<Container fluid className='h-100'>
				<Row className='h-100'>
					<Col md={3}>
						<GroveList />
					</Col>
					<Col>
						<Map defaultCenter={[ lat, long ]} defaultZoom={10}>
						</Map>
					</Col>
				</Row>
			</Container>

		</div>
	);
}


export default App;
