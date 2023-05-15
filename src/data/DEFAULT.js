export const DEFAULTGROVES = [
	{
		name: 'Carleton Grove',
		id: 'carletonGrove',
		address: '',
		city: 'Northfield',
		region: 'MN',
		country: 'USA',
		postCode: '',
		metro: 'Minneapolis-St Paul, MN',
		founded: '1963',
		membership: 6,
		affiliation: [ 'RDNA' ],
		email: 'smitha@carleton.edu',
		web: '',
		phone: '',
		officers: [ ],
		updated: 1403931600000,
	},
	{
		name: 'All Worlds Grove',
		id: 'allWorldsGrove',
		address: '',
		city: 'San Antonio',
		region: 'TX',
		country: 'USA',
		postCode: '',
		metro: 'San Antonio, TX',
		founded: '2023',
		membership: 3,
		affiliation: [ 'RDNA', 'RDG' ],
		email: 'allworlds@proton.me',
		web: 'https://allworldsgrove.org',
		phone: '',
		officers: [ '992419c7-e4e6-452f-9bb2-87733014cfde' ],
		updated: 1681150894322,
	},
	{
		name: 'Hazel Nut Grove',
		id: 'hazelNutGrove',
		address: 'PO Box 6775',
		city: 'San Jose',
		region: 'CA',
		country: 'USA',
		postCode: '',
		metro: 'Bay Area, CA',
		founded: '1977',
		membership: 15,
		affiliation: [ 'NRDNA' ],
		email: 'tezra.reitan@gmail.com',
		web: '',
		phone: '',
		officers: [ ],
		updated: 1403931600000,
	},
	{
		name: 'Tuatha de Danann Grove',
		id: 'tuathaDeDanannGrove',
		address: '',
		city: 'Hayward',
		region: 'CA',
		country: 'USA',
		postCode: '',
		metro: '',
		founded: '1992',
		membership: 5,
		affiliation: [ 'NRDNA' ],
		email: 'j.r.sommer861@gmail.com',
		web: '',
		phone: '',
		officers: [ ],
		updated: 1403931600000,
	}
]

export const DEFAULTDRUIDS = [
	{
		name: 'Wraidd Skywalker',
		id: '992419c7-e4e6-452f-9bb2-87733014cfde',
		affiliation: [ 'AODA', 'RDNA', 'RDG', 'NoD' ],
		metro: 'San Antonio, TX',
		address: '10730 Potranco Rd Ste 122-208',
		city: 'San Antonio',
		region: 'TX',
		country: 'USA',
		postCode: '78251',
		since: '1997',
		email: 'wraidd@moonbeam.town',
		web: 'https://moonbeam.town/@wraidd',
		phone: '+1 (585) 708-9501',
		updated: 1681150894322,
	},
]


/*

NOTE: In order to reduce the number of external API calls that have to be made,
I'm instead going to store the grove's coordinates in the back end.  Whenever
a new entry is made or existing entry updated, the Express server will call the
Geolocation API to get the coordinates and store them in the entry.  Then all
that needs to be done is to fetch the distances from the user's location to
each grove.

### Grove Info

- Founded
- Affiliation
- Membership count
- Location (City, Province, Country, Post)
- Metro area
- Webpage
- Contact email
- Contact phone
- Contact address
- Officers/leadership
- Last updated

### People Info

- Legal Name
- Magical Name
- Affiliation (if any)
- Metro area
- Contact info
- Last updated

*/
