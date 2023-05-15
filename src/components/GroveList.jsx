import { DEFAULTGROVES } from '../data/DEFAULT.js';
import { Container, Row, Col } from 'reactstrap';

export default function GroveList() {

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

	return (
		<ul>{listItems}</ul>
	);
}
