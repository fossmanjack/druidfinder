import {
	Accordion,
	Container,
	Row,
	Col
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function GroveCard({ grove }) {
	const { units } = useSelector(S => S.options);
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

	const addressString = _ => {
		let output = '';

		if(city) output += `${city}`;
		if(region) {
			if(output) output += `, ${region}`;
			else output += `${region}`;
		};
		if(postCode) {
			if(output) output += `, ${postCode}`;
			else output += `${postCode}`;
		};
		if(country) {
			if(output) output += `, ${country}`;
			else output += `${country}`;
		};

		return output;
	}

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
							{addressString()}
						</Col>
					</Row>
					<Row>
						<Col>
							Distance: {distance} {units === 'imperial' ? 'mi' : 'km'}
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

