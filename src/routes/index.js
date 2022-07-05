const partners = [
	{
		logo: {
			url: 'https://www.igb-berlin.de/en',
			title: 'IGB - Leibniz Institute of Freshwater Ecology and Inland Fisheries',
			image: 'https://www.igb-berlin.de/themes/custom/igbtheme/images/logo_en.svg'
		},
		description:
			'The Leibniz Institute of Freshwater Ecology and Inland Fisheries (IGB) is Germany’s largest and one of the leading international research centres for freshwaters. Our vision is the understanding of all fundamental processes in freshwaters and their communities. Our research findings help to tackle global environmental changes and to develop measures conductive to sustainable water management – true to our guiding principle “Research for the future of our freshwaters”.'
	},
	{
		logo: {
			url: 'https://www.fu-berlin.de/en',
			title: 'Freie Universität Berlin',
			image: 'https://upload.wikimedia.org/wikipedia/de/7/71/Fub-logo.svg'
		},
		description:
			'Freie Universität Berlin is a leading research institution. It is one of the 13 German universities being funded through the German government’s Excellence Strategy and is part of the only University Consortium of Excellence, the Berlin University Alliance. The four Berlin partners – Freie Universität Berlin, Humboldt-Universität zu Berlin, Technische Universität Berlin, and Charité – Universitätsmedizin Berlin – submitted a joint proposal in the Excellence Strategy entitled Crossing Boundaries toward an Integrated Research Environment. The four institutions’ long-term goal is nothing less than to turn Berlin into an integrated research environment and one of Europe’s leading research hubs.'
	},
	{
		logo: {
			url: 'https://openknowledgemaps.org/',
			title: 'Open Knowledge Maps',
			image:
				'https://raw.githubusercontent.com/OpenKnowledgeMaps/CoVis/master/img/Logo-Open-Knowledge-Maps-BGwhite.svg'
		},
		description:
			"Open Knowledge Maps' goal is to revolutionize discovery of scientific knowledge. By building a visual interface that dramatically increases the visibility of research findings for science and society alike. A charitable non-profit organization with a belief that a better way to explore and discover scientific knowledge will benefit everyone."
	}
];

const funders = [
	{
		logo: {
			url: 'https://www.volkswagenstiftung.de/',
			title: 'Volkswagen Foundation',
			image: 'https://www.volkswagenstiftung.de/profiles/vwst/theme/volkswagen/images/logo.svg'
		},
		description:
			'Financial support for this project has been received from the VolkswagenStiftung (97 863).'
	}
];

export async function get() {
	return {
		body: {
			data: { partners, funders }
		}
	};
}
