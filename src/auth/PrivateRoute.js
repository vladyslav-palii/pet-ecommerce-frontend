import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isAuth} from '../auth/index';

const PrivateRoute = ({component: Component, ...rest}) => {
  return(
    <Route {...rest} 
      render={props=>isAuth() ? (
        <Component {...props}></Component>
      ) : (
        <Redirect to={{
          pathname: '/signin',
          state: {from: props.location}
          }} ></Redirect>
      )}
    />
)};

export default PrivateRoute;
