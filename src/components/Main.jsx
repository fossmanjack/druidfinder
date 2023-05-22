import {
	Col,
	Container,
	Row
} from 'react-bootstrap';
import GroveList from '../components/GroveList';
import GroveMap from '../components/GroveMap';
import '../css/localstyles.css';

export default function Main() {

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
