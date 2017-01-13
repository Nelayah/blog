import express from 'express';
import path from 'path';
import { match, RouterContext } from 'react-router';

import rootRoute from './../../src/routes/init.js';

const port = 4444;
const app = express();
const publicPath = path.join(__dirname, './../dist');
app.use(express.static(publicPath));

function render(req, res, renderProps) {
	const frontUrl = renderProps.location.pathname;
	const { type } = renderProps.components[1].content;
	const { name } = renderProps.params;
	console.log(frontUrl, type, name);
}

app.get('*', (req, res) => {
	match({ rootRoute, location: req.url }, (error, redirectLocation, renderProps) => {
		/*if (error) {
			return res.status(500).sendFile("config.error50xFile");
		}
		if (redirectLocation) {
			return res.redirect(302, `${redirectLocation.pathname}${redirectLocation.search}`);
		}*/
		console.log("OK!!!!!!!!!!!!!");
		if (renderProps) {
			return render(req, res, renderProps);
		}
		/*return res.status(404).sendFile(config.error404File);*/
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});