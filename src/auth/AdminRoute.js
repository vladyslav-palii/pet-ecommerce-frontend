import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isAuth} from '../auth/index';

const AdminRoute = ({component: Component, ...rest}) => {
  return(
    <Route {...rest} 
      render={props=>isAuth() && isAuth().user.role === 1 ? (
        <Component {...props}></Component>
      ) : (
        <Redirect to={{
          pathname: '/signin',
          state: {from: props.location}
          }} ></Redirect>
      )}
    />
)};

export default AdminRoute;