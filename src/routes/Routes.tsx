import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';
import Companies from './Companies';
import CreateCompany from './CreateCompany';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Companies' exact component={Companies} />
      <Route path='/CreateCompany' exact component={CreateCompany} />

      <Route path='/' component={NotFound} />
    </Switch>
  );
};

export default Routes;
