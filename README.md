# 博客 - React 同构应用的实践
The blog is built with react, react-router, redux, materail ui, immutable, webpack2, es6, ...

## 前端
### 客户端渲染(client-side render)
1. UI层，使用Meterial UI库
2. 逻辑层，使用react全家桶，react，react-router 3.X，redux，immutablejs, 其中还使用react-router-redux，进行全局store管理。
3. 博客内容，使用markdown语法，用showdownjs来转换md内容。
4. 使用es6，用babel转es5
5. 使用sass，其中浏览器兼容性用postcss来polyfill，ui库行内嵌套样式使用的inline-style-prefix来polyfill，useragent为all
6. AJAX，使用superagent + promise, ie11的兼容使用了babel-polyfill
7. 用webpack2来完成打包，code split和资源替换。ExtractTextPlugin抽取react组件引用的sass文件；CommonsChunkPlugin和ProvidePlugin进行code split，以ui库，所使用的框架和逻辑代码来分离成ui.js，vendor.js，immutable.js和index.js；用ejs做模板，HtmlWebpackPlugin进行资源替换，其中静态文件的hash值使用WebpackMd5Hash。
8. 架构方面，以react-router为基准，每个router对应着一个组件，采用异步路由，做到按需加载。react-router匹配所有路由，不存在的路由跳转404。
9. react-helmet 进行meta标签替换。
10. eslint, 进行js代码规范，csscomb进行sass代码规范。

### 服务端渲染(server-side render)
1. 采用nodejs做服务端渲染，使用express，只进行页面响应。而API请求端口代理到另一个服务端,该服务端只进行api响应处理，以此达到前后端分离。
2. 这里使用react-router@3.X(ps: 因为react-router 1.X，2.X，3.X和4.X的API各不兼容...)。
3. 客户端和服务端api请求进行统一约束
4. 检测浏览器useraget，低版本浏览器返回另外页面。
5. 使用中间件compression进行响应文件压缩

### API服务端
[API server](https://github.com/Nelayah/blogCMS)

## License

Copyright © 2017, 彭加生 (hayalen < hayaleNelayah@outlook.com >). All Rights Reserved.
This project is free software and released under the **[GNU General Public License (GPL V3)](http://www.gnu.org/licenses/gpl.html)**.


