import { Map, Marker } from 'pigeon-maps';
import { useSelector } from 'react-redux';
import DruidSigilIcon from '../components/DruidSigilIcon';


export default function GroveMap() {
	const { filteredList, orgList } = useSelector(S => S.grovelist);
	//const { mapLat, mapLng, zoom } = useSelector(S => S.mapctl);
	const { myCoords } = useSelector(S => S.mydata);
	const zoom = 4;

	return (
		<Map defaultCenter={myCoords} defaultZoom={zoom}>
			{
				filteredList.map(data => {
					// it doesn't work if I break this out into a local
					// component, not sure why

					const [ grove, distance ] = data;
					const org = grove.affiliation[0] ?? 'None';
					//const [ latitude, longitude ] = grove.coords;
					const { color } = orgList[org] ?? 'gray';


/*
					switch(org) {
						case 'AODA': color = 'green'; break;
						case 'RDNA': color = 'yellow'; break;
						case 'ADF': color = 'red'; break;
						default: color = 'grey';
					};
*/

/*
					return (
						<Marker
							width={30}
							anchor={grove.coords}
							color={color}
							key={grove.id}
						>
							<DruidSigilIcon size={30} color={color} />
						</Marker>
*/
					return (
						<Marker
							width={30}
							anchor={grove.coords}
							color={color}
							key={grove.id}
						/>
					);
				})
			}
			<Marker
				width={30}
				anchor={myCoords}
				color='black'
				key='myLocation'
				onClick={_ => console.log('MyMarker onClick:', myCoords)}
			/>
		</Map>
	);

}
