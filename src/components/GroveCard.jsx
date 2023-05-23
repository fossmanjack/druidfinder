import {
	Accordion,
	Container,
	Row,
	Col
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function GroveCard({ grove }) {
	console.log('GroveCard: received grove', grove);
	const [ groveData, distance ] = grove;
	const {
		name,
		id,
		address,
		city,
		region,
		country,
		postCode,
		founded,
		membership,
		affiliation,
		email,
		web,
		phone,
		officers,
		coords,
		updated,
	} = groveData;

	return (
		<Accordion.Item eventKey={id}>
			<Accordion.Header>
				{name}
			</Accordion.Header>
			<Accordion.Body>
				<Container>
					<Row>
						<Col>
							{address}
						</Col>
					</Row>
					<Row>
						<Col>
							{city}, {region}, {postCode}, {country}
						</Col>
					</Row>
					<Row>
						<Col>
							{distance}
						</Col>
					</Row>
				</Container>
			</Accordion.Body>
		</Accordion.Item>
	);
}



/* OLD CODE

	return (

		<Container>
			<Row>
				<Col>
					{grove.name}
				</Col>
			</Row>
		</Container>
	);
*/

