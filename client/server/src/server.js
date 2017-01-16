import express from 'express';
import path from 'path';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

import rootRoute from './../../src/routes/init.js';
import reducers from './../../src/reducers/init';
import template from './../../dist/template.html';

const port = 4444;
const app = express();
const publicPath = path.join(__dirname, './../../dist');
app.use(express.static(publicPath));

function renderPage(content, preloadedState) {
	function tag(strings, ...values) {
		console.log(strings.raw[0]);
		// "string text line 1 \\n string text line 2"
	}
	return String.raw`${template}`;
}


function render(req, res, renderProps) {
	/*	const frontUrl = renderProps.location.pathname;
		const { name } = renderProps.params;*/
	// const { type } = renderProps.components[1].content;
	// console.log(renderProps);
	const store = createStore(reducers);
	const appHtml = renderToString(
		<Provider store={store}>
			<RouterContext {...renderProps} />
		</Provider>
	)
	const preloadedState = store.getState();
	res.send(renderPage(appHtml, preloadedState));
}

app.get('*', (req, res) => {
	match({ routes: rootRoute, location: req.url }, (error, redirectLocation, renderProps) => {
		/*if (error) {
			return res.status(500).sendFile("config.error50xFile");
		}
		if (redirectLocation) {
			return res.redirect(302, `${redirectLocation.pathname}${redirectLocation.search}`);
		}*/
		if (renderProps) {
			return render(req, res, renderProps);
		}
		/*return res.status(404).sendFile(config.error404File);*/
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});