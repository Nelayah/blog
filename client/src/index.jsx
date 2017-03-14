import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { match, Router, browserHistory } from 'react-router';
import _ from 'lodash';
import Immutable from 'immutable';
import rootRoute from './routes/init';
import reducers from './reducers/init';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './routes/Index/consts/muiTheme.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

let initState = {};

_.keys(window.__PRELOADED_STATE__).map(key => {
    initState[key] = Immutable.fromJS(window.__PRELOADED_STATE__[key]);
});

const store = createStore(reducers, initState);
let rootElement = document.getElementById('root');

match({ history: browserHistory, routes: rootRoute }, (error, redirectLocation, renderProps) => {
	render((
		<MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
			<Provider store={store}>
				<Router {...renderProps} />
			</Provider>
		</MuiThemeProvider>
	), rootElement);
});


