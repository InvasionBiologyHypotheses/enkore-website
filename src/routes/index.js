const pandp = [
	{
		type: 'group',
		data: {
			organisations: []
		}
	}
];

const associations = {
	groups: [
		{
			description: 'The IGB and FU are jointly working on this project.',
			organisations: [0, 1]
		},
		{
			organisations: [3]
		}
	],
	people: [
		{
			first: 'Maud',
			last: 'Bernard-Verdier',
			position: 'Invasion Biologist',
			organisations: [0, 1, 2]
		},
		{ first: 'Tina', last: 'Heger', position: 'Invasion Biologist', organisations: [0, 1, 2] },
		{
			first: 'Jonathan',
			last: 'Jeschke',
			position: 'Invasion Biologist',
			organisations: [0, 1, 2]
		},
		{ first: 'Daniel', last: 'Mietchen', position: 'Software Developer', organisations: [0, 1, 2] },
		{ first: 'Camille', last: 'Musseau', position: 'Invasion Biologist', organisations: [0, 1, 2] },
		{ first: 'Steph', last: 'Tyszka', position: 'Software Developer', organisations: [0, 1, 2] },
		{ first: 'Christopher', last: 'Kittel', position: 'Software Developer', organisations: [3] },
		{ first: 'Jan', last: 'Konstant', position: 'Data Scientist', organisations: [3] },
		{ first: 'Peter', last: 'Kraker', position: 'Data Scientist', organisations: [3] },
		{ first: 'Maxi', last: 'Schramm', position: 'UX/UI Designer', organisations: [3] }
	],
	organisations: [
		{
			id: 0,
			name: 'Leibniz Institute of Freshwater Ecology and Inland Fisheries',
			shortname: 'IGB',
			logo: 'https://www.igb-berlin.de/themes/custom/igbtheme/images/logo_en.svg',
			url: 'https://www.igb-berlin.de/',
			description: "IGB is the world's leading authority on Freshwater Ecology..."
		},
		{
			id: 1,
			name: 'Freie Universität Berlin',
			shortname: 'FU',
			logo: 'https://upload.wikimedia.org/wikipedia/de/7/71/Fub-logo.svg',
			url: 'https://www.fu-berlin.de/',
			description: "FU is Berlin's biggest research institution..."
		},
		{
			id: 3,
			name: 'Open Knowledge Maps',
			shortname: 'OKMaps',
			logo: 'https://raw.githubusercontent.com/OpenKnowledgeMaps/CoVis/master/img/Logo-Open-Knowledge-Maps-BGwhite.svg',
			url: 'https://openknowledgemaps.org/',
			description: 'Open Knowledge Maps is a collaborative project to...'
		}
	]
};

export async function get() {
	return {
		body: {
			associations
		}
	};
}
