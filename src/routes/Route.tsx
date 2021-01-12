import React from 'react';
import { Route as ReactRoute, RouteProps as ReactRouteProps, Redirect } from 'react-router-dom';

import Header from '../components/Header';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => (
  <ReactRoute
    {...rest}
    render={({ location }) => (isPrivate ? (
      <>
        (
        <>
          <Header />
        </>
        )
        <Component />
      </>
    )
      : (
        <Redirect to={{
          pathname: isPrivate ? '/signin' : '/',
          state: { from: location },
        }}
        />
      ))}
  />
);

export default Route;
