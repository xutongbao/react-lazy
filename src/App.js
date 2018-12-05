import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home'));
const Bar = lazy(() => import('./Bar'));

const App = () => (
  <Router>
    <Suspense fallback={<div>loading</div>}>
      <div>
        <ul>
          <li><Link to="/">Home></Link></li>
          <li><Link to="/bar">Bar></Link></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bar" component={Bar} />
      </Switch>
    </Suspense>
  </Router>
)

export default App;