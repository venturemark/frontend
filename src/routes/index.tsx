import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Timeline from '../pages/Timeline';

import PageWrapper from '../components/PageWrapper'

const Routes: React.FC = () => (
  <PageWrapper>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/timeline" exact component={Timeline} />
      <Route path="/singin" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
    </Switch>
  </PageWrapper>
);

export default Routes;
