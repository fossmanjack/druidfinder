import sigFig from '../utils/sigFig';

export default function getDistance(myCoords, destCoords, units = 'imperial') {
	// This function accepts two coordinate sets as arguments
	// and calculates the distance between them in miles (for
	// now -- will implement km later)

//	console.log('getDistance:', myCoords, destCoords);

	const toRad = val => val * Math.PI / 180; // convert degrees to radians
	const radius = units === 'imperial' ? 3959 : 6371;

	const [ mLat, mLng ] = myCoords;
	const [ dLat, dLng ] = destCoords;

	const deltaLat = toRad(dLat - mLat);
	const deltaLng = toRad(dLng - mLng);

	const a =
		Math.sin(deltaLat/2) *
		Math.sin(deltaLat/2) +
		Math.sin(deltaLng/2) *
		Math.sin(deltaLng/2) *
		Math.cos(toRad(mLat)) *
		Math.cos(toRad(dLat))
	;

	return sigFig(2 * radius * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)), 1);
}

/*
export default function getDistance(myCoords, destCoords, units = 'miles') {
	// This function accepts two coordinate sets as arguments
	// and calculates the distance between them in miles (for
	// now -- will implement km later)

	console.log('getDistance:', myCoords, destCoords);

	const toRad = val => val * Math.PI / 180; // convert degrees to radians

	const radius = units === 'miles' ? 3959 : 6371;
	const dLat = toRad(destCoords.latitude - myCoords.latitude);
	const dLong = toRad(destCoords.longitude - myCoords.longitude);
	const myLat = toRad(myCoords.latitude);
	const destLat = toRad(destCoords.latitude);

	const a =
		Math.sin(dLat/2) *
		Math.sin(dLat/2) +
		Math.sin(dLong/2) *
		Math.sin(dLong/2) *
		Math.cos(myLat) *
		Math.cos(destLat)
	;

	return sigFig(2 * radius * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)), 1);
}
*/

// Let's optimize

/*
export default function getDistance(myCoords, destCoords, units = 'miles') {
	// expects a tuple [ latitude, longitude ] for each coordinate set

	const toRad = val => val * 0.017453292519943295;	// Math.PI / 180
	const radius = units === 'miles' ? 7918 : 12742; 	// 2 * radius in miles or km

	const [ mLat, mLng ] = myCoords;
	const [ oLat, oLng ] = destCoords;
	const dLat = toRad(oLat - mLat);
	const dLng = toRad(oLng - mLng);

	const a =
		0.5 -
		Math.cos(dLat)/2 +
		Math.cos(toRad(mLat)) *
		Math.cos(toRad(oLat)) *
		(1 - Math.cos(dLng))
	;

	return sigFig(radius * Math.asin(Math.sqrt(a)), 1);
}
*/

/*
export default function getDistance(myCoords, destCoords) {
	const p = 0.017453292519943295;    // Math.PI / 180
	const c = Math.cos;
	const [ mLat, mLng ] = myCoords;
	const [ dLat, dLng ] = destCoords;

	var a = 0.5 - c((dLat - mLat) * p)/2 +
		c(mLat * p) * c(dLat * p) *
		(1 - c((dLng - mLng) * p))/2;

	return sigFig(7918 * Math.asin(Math.sqrt(a)), 1); // 2 * R; R = 6371 km
}

*/

