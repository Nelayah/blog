import express from 'express';
import ejs from 'ejs';
import path from 'path';
import proxy from 'http-proxy-middleware';
import compression from 'compression';
import parser from 'ua-parser-js';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

import rootRoute from './../../src/routes/init.js';
import reducers from './../../src/reducers/init';
import template from './../../dist/template.html';
import browserSupportHtml from './browserSupport.html';
import config from './../../src/config.js';
import actions from './../../src/actions/init.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './../../src/routes/Index/consts/muiTheme.js';
import ajax from './../../src/lib/ajax.js';

const port = 5444;
const apiServer = 'http://localhost:8000';

const app = express();
const publicPath = path.join(__dirname, './../../dist');
const {
	taps
} = config.getIn(['url']).toJS();

ejs.delimiter = '?';
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(compression());
app.use(express.static(publicPath));

const tapHighlight = (pathname) => {
	for (let x in taps) {
		if (pathname.indexOf(taps[x]) !== -1) {
			return taps[x];
		}
	}
	return taps.article;
};

const browserSupport = {
	'Chrome': 46,
	'Firefox': 40,
	'Safari': 8,
	'Opera': 16,
	'IE': 11,
	'Edge': 12
};

function render(req, res, renderProps) {
	let store = createStore(reducers),
		highlight = tapHighlight(req.url);

	store.dispatch({ type: actions.getIn(['pages', 'taps']), taps: highlight });
	ajax.get(`${apiServer}/api${req.url}`)
		.catch((reject) => {
			let result = JSON.parse(reject.response.text);
			store.dispatch({ type: actions.getIn(['pages', 'content']), pathname: req.url, response: result });
			return false;
		})
		.then((resolve) => {
			if (resolve) {
				let result = JSON.parse(resolve.text);
				store.dispatch({ type: actions.getIn(['pages', 'content']), pathname: req.url, response: result });
			}
			const content = renderToString(
				<MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
					<Provider store={store}>
						<RouterContext {...renderProps} />
					</Provider>
				</MuiThemeProvider>
			);
			const preloadedState = store.getState();
			const page = ejs.render(template, { content, preloadedState });
			res.send(page);
		});
}
global.navigator = {
	userAgent: 'all'
};

app.use('/api', proxy({
	target: apiServer,
	changeOrigin: true
}));

app.get('*', (req, res) => {
	let ua = parser(req.headers['user-agent']);

	if (ua['browser'].major < browserSupport[ua['browser'].name]) {
		res.send(browserSupportHtml);
	}

	match({ routes: rootRoute, location: req.url }, (error, redirectLocation, renderProps) => {
		global.location = {
			pathname: req.url
		};
		if (redirectLocation) {
			return res.redirect(302, `${redirectLocation.pathname}${redirectLocation.search}`);
		}
		if (renderProps) {
			return render(req, res, renderProps);
		}
		return false;

	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});