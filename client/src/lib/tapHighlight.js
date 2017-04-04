import config from './../config.js';

const {
	taps
} = config.getIn(['url']).toJS();

export const tapHighlight = (pathname) => {
	for (let x in taps) {
		if (pathname.indexOf(taps[x]) !== -1) {
			return taps[x];
		}
	}
	return taps.article;
};