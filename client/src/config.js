import Immutable from 'immutable';
const character = {
	A: ['     /\\     ',
		'    /  \\    ',
		'   / /\\ \\   ',
		'  / /  \\ \\  ',
		' /  ˉˉˉˉ  \\ ',
		'/ /ˉˉˉˉˉˉ\\ \\',
		'ˉˉ        ˉˉ'
	],
	B: ['|ˉˉˉˉˉˉˉˉˉ\\ ',
		'| |ˉˉˉˉˉ\\ | ',
		'|  ˉˉˉˉˉ  / ',
		'| |ˉˉˉˉˉ\\ \\ ',
		'| |     /  |',
		'|  ˉˉˉˉˉ  / ',
		' ˉˉˉˉˉˉˉˉˉ  '
	],
	C: ['/ˉˉˉˉˉˉˉˉˉ\\ ',
		'| |ˉˉˉˉˉ\\ | ',
		'| |      ˉ  ',
		'| |         ',
		'| |      /ˉ|',
		'\\  ˉˉˉˉˉˉ / ',
		' ˉˉˉˉˉˉˉˉˉ  '
	],
	D: ['|ˉˉˉˉˉˉˉˉ\\  ',
		'| |ˉˉˉˉˉ\\ \\ ',
		'| |      | |',
		'| |      / |',
		'| |     / / ',
		'|  ˉˉˉˉˉ /  ',
		' ˉˉˉˉˉˉˉˉ   '
	],
	E: ['|ˉˉˉˉˉˉˉˉˉˉ|',
		'| |ˉˉˉˉˉˉˉˉ ',
		'|  ˉˉˉˉˉˉˉˉ|',
		'| |ˉˉˉˉˉˉˉˉ ',
		'| |         ',
		'|  ˉˉˉˉˉˉˉˉ|',
		' ˉˉˉˉˉˉˉˉˉˉ '
	],
	F: ['|ˉˉˉˉˉˉˉˉˉˉ|',
		'| |ˉˉˉˉˉˉˉˉ ',
		'|  ˉˉˉˉˉˉˉˉ|',
		'| |ˉˉˉˉˉˉˉˉ ',
		'| |         ',
		'| |         ',
		'ˉˉˉ         '
	],
	G: ['  /ˉˉˉˉˉˉ\\  ',
		' / /ˉˉˉˉ\\ | ',
		'| |      ˉˉ ',
		'| |  |ˉˉˉˉˉ|',
		' \\ \\  ˉ| |ˉ ',
		'  \\ ˉˉˉ /   ',
		'   ˉˉˉˉˉ    '
	],
	H: ['|ˉ|      |ˉ|',
		'| |      | |',
		'|  ˉˉˉˉˉˉ  |',
		'| |ˉˉˉˉˉˉ| |',
		'| |      | |',
		'| |      | |',
		' ˉ        ˉ '
	],
	I: ['|ˉˉˉˉˉˉˉˉˉˉ|',
		' ˉˉˉ|  |ˉˉˉ ',
		'    |  |    ',
		'    |  |    ',
		'    |  |    ',
		'|ˉˉˉ    ˉˉˉ|',
		' ˉˉˉˉˉˉˉˉˉˉ '
	],
	J: ['|ˉˉˉˉˉˉˉˉˉ|',
		'ˉˉˉˉˉ| |ˉˉ ',
		'     | |   ',
		'     | |   ',
		'\\ˉ\\  / |   ',
		' \\ ˉˉ /    ',
		'  ˉˉˉˉ     '
	],
	K: ['|ˉ|    /ˉ/ ',
		'| |   / /  ',
		'|  ˉˉˉ |   ',
		'| |ˉˉˉ\\ \\  ',
		'| |    \\ \\ ',
		'| |     \\ \\',
		' ˉ       ˉ '
	],
	L: ['|ˉ|         ',
		'| |         ',
		'| |         ',
		'| |         ',
		'| |         ',
		'|  ˉˉˉˉˉˉˉˉ|',
		' ˉˉˉˉˉˉˉˉˉˉ '
	],
	M: ['|ˉˉˉˉˉˉˉˉˉˉˉ|',
		'| |ˉˉ| |ˉˉ| |',
		'| |  | |  | |',
		'| |  | |  | |',
		'| |  | |  | |',
		'| |  | |  | |',
		'ˉˉˉ  ˉˉˉ  ˉˉˉ'
	],
	N: ['|ˉˉˉ\\    |ˉ|',
		'| |\\ \\   | |',
		'| | \\ \\  | |',
		'| |  \\ \\ | |',
		'| |   \\ \\| |',
		'| |    \\ ˉ |',
		' ˉ      ˉˉˉ '
	],
	O: [' /ˉˉˉˉˉˉˉˉ\\ ',
		'/ /ˉˉˉˉˉˉ\\ \\',
		'| |      | |',
		'| |      | |',
		'\\ \\      / /',
		' \\ ˉˉˉˉˉˉ / ',
		'  ˉˉˉˉˉˉˉˉ  '
	],
	P: ['|ˉˉˉˉˉˉˉˉˉ\\ ',
		'| |ˉˉˉˉˉˉ\\ \\',
		'| |      | |',
		'| ˉˉˉˉˉˉˉ  /',
		'| |ˉˉˉˉˉˉˉˉ ',
		'| |         ',
		'ˉˉˉ         '
	],
	Q: [' /ˉˉˉˉˉˉˉˉ\\  ',
		'/ /ˉˉˉˉˉˉ\\ \\ ',
		'| |      | | ',
		'| |      | | ',
		'\\ \\      / / ',
		' \\ ˉˉˉˉˉˉ  \\ ',
		'  ˉˉˉˉˉˉˉ\\__\\'
	],
	R: ['|ˉˉˉˉˉˉˉˉˉ\\ ',
		'| |ˉˉˉˉˉˉ\\ \\',
		'| |      | |',
		'| ˉˉˉˉˉˉˉ  /',
		'| |ˉˉˉˉ\\ \\ˉ ',
		'| |     \\ \\ ',
		' ˉ       ˉˉ '
	],
	S: [' /ˉˉˉˉˉˉˉˉˉ|',
		'/ /ˉˉˉˉˉˉˉˉ ',
		'\\ ˉˉˉˉˉˉˉˉ\\ ',
		' ˉˉˉˉˉˉˉˉ\\ \\',
		'\\ˉ\\      / /',
		' \\ ˉˉˉˉˉˉ / ',
		'  ˉˉˉˉˉˉˉˉ  '
	],
	T: ['|ˉˉˉˉˉˉˉˉˉˉˉ|',
		' ˉˉˉˉ| |ˉˉˉˉ ',
		'     | |     ',
		'     | |     ',
		'     | |     ',
		'     | |     ',
		'     ˉˉˉ     '
	],
	U: ['|ˉ|      |ˉ|',
		'| |      | |',
		'| |      | |',
		'| |      | |',
		' \\ \\    / / ',
		'  \\ ˉˉˉˉ /  ',
		'   ˉˉˉˉˉˉ   '
	],
	V: ['|ˉ|      |ˉ|',
		'| |      | |',
		' \\ \\    / / ',
		'  \\ \\  / /  ',
		'   \\ \\/ /   ',
		'    \\  /    ',
		'     ˉˉ     '
	],
	W: ['|ˉ|  /ˉˉ\\  |ˉ|',
		'| | / /\\ \\ | |',
		'| | | || | | |',
		'| | | || | | |',
		' \\ ˉ /  \\ ˉ / ',
		'  \\ /    \\ /  ',
		'   ˉ      ˉ   '
	],
	X: ['\\ˉ\\      /ˉ/',
		' \\ \\    / / ',
		'  \\ ˉˉˉˉ /  ',
		'  / /ˉˉ\\ \\  ',
		' / /    \\ \\ ',
		'/ /      \\ \\',
		'ˉˉ        ˉˉ'
	],
	Y: ['\\ˉ\\    /ˉ/',
		' \\ \\  / / ',
		'  \\ \\/ /  ',
		'   \\  /   ',
		'   |  |   ',
		'   |  |   ',
		'    ˉˉ    '
	],
	Z: ['|ˉˉˉˉˉˉˉˉˉˉ|',
		' ˉˉˉˉˉˉˉ/ / ',
		'  /ˉˉˉˉˉ /  ',
		' / /ˉˉˉˉ    ',
		'/ /         ',
		'|  ˉˉˉˉˉˉˉˉ|',
		' ˉˉˉˉˉˉˉˉˉˉ'
	],
	1: ['   /ˉˉˉ|    ',
		'  / /| |    ',
		'  ˉˉ | |    ',
		'     | |    ',
		'     | |    ',
		'|ˉˉˉˉ   ˉˉˉ|',
		' ˉˉˉˉˉˉˉˉˉˉ '
	],

	2: [' /ˉˉˉˉˉˉˉˉ\\ ',
		'/ /ˉˉˉˉˉˉ\\ \\',
		'ˉˉ       / /',
		'|ˉˉˉˉˉˉˉˉ / ',
		'| |ˉˉˉˉˉˉˉ  ',
		'|  ˉˉˉˉˉˉˉˉ|',
		' ˉˉˉˉˉˉˉˉˉˉ '
	],
	3: ['|ˉˉˉˉˉˉˉˉˉˉ\\',
		' ˉˉˉˉˉˉˉˉ| |',
		'|ˉˉˉˉˉˉˉˉ  /',
		' ˉˉˉˉˉˉˉˉ| \\',
		'         / |',
		'|ˉˉˉˉˉˉˉˉ  /',
		' ˉˉˉˉˉˉˉˉˉˉ '
	],
	4: ['    /ˉˉˉ|   ',
		'   / /| |   ',
		'  / / | |   ',
		' / /  | |   ',
		'|  ˉˉˉˉ ˉˉˉ|',
		' ˉˉˉˉˉ| |ˉˉ ',
		'      ˉˉˉ   '
	],
	5: ['|ˉˉˉˉˉˉˉˉˉˉ|',
		'| |ˉˉˉˉˉˉˉˉ ',
		'\\ ˉˉˉˉˉˉˉˉ\\ ',
		' ˉˉˉˉˉˉˉˉ\\ \\',
		'\\ˉ\\      / /',
		' \\ ˉˉˉˉˉˉ / ',
		'  ˉˉˉˉˉˉˉˉ  '
	],
	6: [' /ˉˉˉˉˉˉˉˉ| ',
		'| /ˉˉˉˉˉˉˉ  ',
		'| ˉˉˉˉˉˉˉˉ\\\\',
		'| |ˉˉˉˉˉˉ\\ \\',
		'\\ \\      / /',
		' \\ ˉˉˉˉˉˉ / ',
		'  ˉˉˉˉˉˉˉˉ  '
	],
	7: ['|ˉˉˉˉˉˉˉˉˉˉ|',
		' ˉˉˉˉˉˉˉ/ / ',
		'       / /  ',
		'      / /   ',
		'     / /    ',
		'    / /     ',
		'    ˉˉ      '
	],
	8: [' /ˉˉˉˉˉˉˉˉ\\ ',
		'| |ˉˉˉˉˉˉ| |',
		'\\  ˉˉˉˉˉˉ  /',
		'/ /ˉˉˉˉˉˉ\\ \\',
		'| \\      / |',
		'\\  ˉˉˉˉˉˉ  /',
		' ˉˉˉˉˉˉˉˉˉˉ '
	],
	9: [' /ˉˉˉˉˉˉˉˉ\\ ',
		'| |ˉˉˉˉˉˉ| |',
		'| |      | |',
		' \\ ˉˉˉˉˉˉ  |',
		'\\ˉ\\ˉˉˉˉˉˉ| |',
		' \\ ˉˉˉˉˉˉ  /',
		'  ˉˉˉˉˉˉˉˉˉ '
	],
	0: [' /ˉˉˉˉˉˉˉ\\ ',
		'/ /ˉˉˉˉˉ\\ \\',
		'| |     | |',
		'| |     | |',
		'\\ \\     / /',
		' \\ ˉˉˉˉˉ / ',
		'  ˉˉˉˉˉˉˉ  '
	]
};

const Alphabet = (str) => {
	let result = '\n';
	for (let j = 0; j < 7; j++) {
		for (let i = 0; i < str.length; i++) {
			result += character[str[i]][j];
		}
		result += '\n';
	};
	result += '\n若对这个BLOG有任何建议，恳请能EMAIL告诉我。EMAIL: hayalen@qq.com m(_ _)m\nBLOG_CREATETIME：2017-03-20';
	return result;
};

const base = {
	'articles': 'articles',
	'articleList': 'articleList',
	'dairy': 'dairy',
	'dairyList': 'dairyList',
	'project': 'project',
	'about': 'about'
};

const config = Immutable.fromJS({
	'website': {
		'title': 'PJS.com - Hayalen blog',
		'description': '技术积累，注重实践, 不做翻译 - Technical accumulation, practice-oriented, not to do translation.',
		'keywords': 'ECMAScript, Node.js, Python, HTML5, CSS3'
	},
	'profile': {
		'name': 'Hayalen',
		'motto': 'Not Fucking Excuse, Just Do It!',
		'introduce_zh': '技术积累，注重实践, 不做翻译',
		'introduce_en': 'Technical accumulation, practice-oriented, not to do translation.',
		'summary': 'ECMAScript | Node.js | Python | HTML5 | CSS3 | etc.',
		'contact': {
			'email': 'hayalenelayah@outlook.com',
			'github': 'https://github.com/Nelayah'
		},
		'quotes': {
			title: 'KNOWLEDGE',
			description: 'Knowledge comes, but wisdom lingers.'
		}
	},
	'url': {
		base,
		routes: {
			'articles': `${base.articles}/:id`,
			'articleList': `${base.articleList}/:id`,
			'dairy': `${base.dairy}/:id`,
			'dairyList': `${base.dairyList}/:id`,
			'project': base.project,
			'about': base.about
		},
		'taps': {
			'article': base.articles,
			'project': base.project,
			'dairy': base.dairy,
			'about': base.about
		}
	},
	'style': {
		'progressStyle': {
			'position': 'absolute',
			'top': '50%',
			'left': '50%',
			'transform': 'translate(-50%, -50%)'
		}
	},
	'notFound': {
		'title': 'Error 404',
		'description': 'Woops. Looks like this page does not exit.'
	},
	'egg': Alphabet('HAYALEN')
});


export default config;