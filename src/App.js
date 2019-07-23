import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home'));
const Bar = lazy(() => import('./Bar'));
const FileUpload = lazy(() => import('./FileUpload'));
const Banner = lazy(() => import('./Banner'));

const App = () => (
  <Router>
    <Suspense fallback={<div>loading</div>}>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bar">Bar</Link></li>
          <li><Link to="/management/file_upload">后台管理</Link></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bar" component={Bar} />
        <Route>
          <div>
            <div>header</div>
            <ul>
              <li><Link to="/management/file_upload">文件上传</Link></li>
              <li><Link to="/management/banner">Banner</Link> </li>
            </ul>                   
            <Route exact path="/management/file_upload" component={FileUpload}></Route>
            <Route exact path="/management/banner" component={Banner}></Route>
          </div>
        </Route>
      </Switch>
    </Suspense>
  </Router>
)

export default App;