import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import rootRoute from './routes/init';
import reducers from './reducers/init';

let store = createStore(reducers);
let rootElement = document.getElementById('root');

render((
	<Provider store={ store }>
		<Router
			history={ browserHistory }
			routes={ rootRoute }
		/>
	</Provider>
), rootElement);