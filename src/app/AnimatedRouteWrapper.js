import React from 'react';
import {Route} from 'react-router-dom';
import AnimatedRoute from './AnimatedRoute';

const AnimatedRouteWrapper = ({component: Component, ...rest}) =>
  <Route
    {...rest}
    children={({match, ...childProps}) =>
      <AnimatedRoute visible={!!match}>
        <Component {...childProps} />
      </AnimatedRoute>}
  />;

export default AnimatedRouteWrapper;