import Index from './Index/components/Index.jsx';
import blog from './Blog/index.js';
import project from './Project/index.js';
import about from './About/index.js';
import dairy from './Dairy/index.js';

const rootRoute = {
	path: '/',
	component: Index,
	childRoutes: [blog, project, about, dairy]
};

export default rootRoute;