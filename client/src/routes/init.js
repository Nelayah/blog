import Index from './components/Index.jsx';
import set from './Set/index.js';
import get from './Get/index.js';

const rootRoute = {
	childRoutes: [{
		path: '/',
		component: Index,
		childRoutes: [set, get]
	}]
}

export default rootRoute;