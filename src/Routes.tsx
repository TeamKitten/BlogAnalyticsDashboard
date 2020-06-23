import React, { memo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from './components/pages/NoMatch';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import PrivateRoute from './components/templates/PrivateRoute';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/" exact>
          <Home />
        </PrivateRoute>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
};

export default memo(Routes);
