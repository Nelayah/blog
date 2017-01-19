import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';

import rootRoute from './routes/init';
import reducers from './reducers/init';
import png from './assets/images/test.png';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = createStore(reducers, preloadedState)
let rootElement = document.getElementById('root');
render((
		<Provider store={store}>
				<Router history={browserHistory} routes={rootRoute}/>
		</Provider>
), rootElement);