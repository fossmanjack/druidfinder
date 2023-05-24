export const DEFAULTGROVES = [
	{
		name: 'Carleton Grove',
		id: 'carletonGrove',
		address: '',
		city: 'Northfield',
		region: 'MN',
		country: 'USA',
		postCode: '',
		founded: '1963',
		membership: 6,
		affiliation: [ 'RDNA' ],
		email: 'smitha@carleton.edu',
		web: '',
		phone: '',
		officers: [ ],
		updated: 1403931600000,
		coords: [ 44.4583, -93.1616 ],
	},
	{
		name: 'All Worlds Grove',
		id: 'allWorldsGrove',
		address: '',
		city: 'San Antonio',
		region: 'TX',
		country: 'USA',
		postCode: '78251',
		founded: '2023',
		membership: 3,
		affiliation: [ 'AODA', 'RDNA' ],
		email: 'allworlds@proton.me',
		web: 'https://allworldsgrove.org',
		phone: '',
		officers: [
			{
				id: '992419c7-e4e6-452f-9bb2-87733014cfde',
				name: 'Wraidd Skywalker',
				position: 'Organizer',
			},
		],
		updated: 1681150894322,
		coords: [ 29.4597, -98.6555 ],
	},
	{
		name: 'Hazel Nut Grove',
		id: 'hazelNutGrove',
		address: 'PO Box 6775',
		city: 'San Jose',
		region: 'CA',
		country: 'USA',
		postCode: '',
		founded: '1977',
		membership: 15,
		affiliation: [ 'NRDNA' ],
		email: 'tezra.reitan@gmail.com',
		web: '',
		phone: '',
		officers: [ ],
		updated: 1403931600000,
		coords: [ 37.3393, -121.895 ],
	},
	{
		name: 'Tuatha de Danann Grove',
		id: 'tuathaDeDanannGrove',
		address: '',
		city: 'Hayward',
		region: 'CA',
		country: 'USA',
		postCode: '',
		founded: '1992',
		membership: 5,
		affiliation: [ 'NRDNA' ],
		email: 'j.r.sommer861@gmail.com',
		web: '',
		phone: '',
		officers: [ ],
		updated: 1403931600000,
		coords: [ 37.6688, -122.0808 ],
	},
	{
		name: 'Grove of the Other Gods, ADF',
		id: 'groveOtherGods',
		address: '13 Hardenberg St',
		city: 'New Brunswick',
		region: 'NJ',
		country: 'USA',
		postCode: '08901',
		founded: '',
		membership: '',
		affiliation: [ 'ADF' ],
		email: 'othergods.nj@gmail.com',
		web: 'http://othergods.org',
		phone: '+1 (908) 336-1022',
		officers: [
			{
				name: 'Sharon Molnar',
				id: 0,
				position: 'Senior Druid',
			},
		],
		updated: 1684779559148,
		coords: [ 40.4970, -74.4500 ],
	},
	{
		name: 'Oakdale Grove',
		id: 'oakdaleGrove',
		address: '',
		city: 'Falcon Heights',
		region: 'MN',
		country: 'USA',
		postCode: '55455',
		founded: '2012',
		membership: '4',
		affiliation: [ 'RDNA' ],
		email: '',
		web: [ 'https://oakdalegrove.org', 'https://facebook.com/OakdaleGrove' ],
		phone: '',
		officers: [
			{
				name: 'John Martens',
				id: 0,
				position: 'Arch-druid',
			},
		],
		updated: 1403913600000,
		coords: [ 44.9863, -93.1795 ],
	},
	{
		name: 'Hemlock and Hazel Grove',
		id: 'hemlockAndHazelGrove',
		address: '',
		city: 'Indiana',
		region: 'PA',
		country: 'USA',
		postCode: '',
		founded: '',
		membership: '',
		affiliation: [ 'AODA' ],
		email: 'danalynndriscoll@gmail.com',
		web: [ ],
		phone: '',
		officers: [
			{
				name: 'Dana O\'Driscoll',
				id: 0,
				position: 'Leader',
			},
		],
		updated: 1684947225161,
		coords: [ 40.6424, -79,1262 ],
	},
]

export const DEFAULTDRUIDS = [
	{
		name: 'Wraidd Skywalker',
		id: '992419c7-e4e6-452f-9bb2-87733014cfde',
		affiliation: [ 'AODA', 'RDNA', 'RDG', 'NoD' ],
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
		coords: [ 29.4241, -98.4936 ],
		serviceArea: {
			description: 'Within 100 miles of San Antonio, TX',
			shapeFile: '',
		},
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
