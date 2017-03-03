import Immutable from 'immutable';

const config = Immutable.fromJS({
	'profile': {
		'name': 'Hayalen',
		'motto': 'Not Fucking Excuse, Just Do It!',
		'introduce_zh': '技术积累，注重实践, 不做翻译',
		'introduce_en': 'Technical accumulation, practice-oriented, not to do translation.',
		'summary': 'HTML5 | CSS3 | ECMAScript | Node.js | Python | etc.',
		'contact': {
			'email': 'hayalenelayah@outlook.com',
			'github': 'https://github.com/Nelayah'
		},
		'quotes': {
			title: 'KNOWLEDGE',
			description: 'Knowledge comes, but wisdom lingers.'
		}
	},
	'address': {
		'blogList': '/articles/?page='
	}
});

export default config;