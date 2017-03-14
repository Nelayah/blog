import Immutable from 'immutable';

const base = {
	'articles': 'articles',
	'articleList': 'articleList',
	'dairy': 'dairy',
	'dairyList': 'dairyList',
	'project': 'project',
	'about': 'about'
};

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
	}
});

export default config;