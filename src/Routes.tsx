import React, { memo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from './components/pages/NoMatch';
import Home from './components/pages/Home';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
};

export default memo(Routes);
