import Index from './Index/components/Index.jsx';
import config from './../config.js';

import articles from './Articles/index.js';
import articleList from './ArticleList/index.js';
import dairy from './Dairy/index.js';
import dairyList from './DairyList/index.js';
import project from './Project/index.js';
import about from './About/index.js';
import page404 from './404/404.js';

const rootRoute = {
	path: '/',
	component: Index,
	indexRoute: { onEnter: (nextState, replace) => replace(`/${config.getIn(['url', 'base', 'articleList'])}/1/`) },
	childRoutes: [articles, articleList, dairy, dairyList, project, about, page404]
};

export default rootRoute;