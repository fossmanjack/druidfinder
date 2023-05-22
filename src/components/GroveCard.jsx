import {
	Accordion,
	Container,
	Row,
	Col
} from 'react-bootstrap';

export default function GroveCard({ grove }) {
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
		updated
	} = grove;

	console.log('Received grove with id:', id);

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
				</Container>
			</Accordion.Body>
		</Accordion.Item>
	);
/*
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
}

