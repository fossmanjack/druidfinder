export default function getDistance(myCoords, destCoords, units = 'miles') {
	// This function accepts two coordinate sets as arguments
	// and calculates the distance between them in miles (for
	// now -- will implement km later)

	const toRad = val => val * Math.PI / 180; // convert degrees to radians

	const radius = units === 'miles' ? 3959 : 6371;
	const dLat = destCoords.latitude - myCoords.latitude;
	const dLong = destCoords.longitude - myCoords.longitude;
	const myLat = myCoords.latitude;
	const destLat = destCoords.latitude;

	const a =
		Math.sin(dLat/2) *
		Math.sin(dLat/2) +
		Math.sin(dLong/2) *
		Math.sin(dLong/2) *
		Math.cos(myLat) *
		Math.cos(destLat)
	;

	return 2 * radius * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

