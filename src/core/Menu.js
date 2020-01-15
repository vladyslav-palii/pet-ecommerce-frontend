import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {signout, isAuth} from '../auth/index';

function isActive (history, path) {
  if(history.location.pathname === path) {
    return {color: '#ff9900'}
  }
  else {
    return {color: '#ffffff'}
  }
}

const Menu = ({history}) => (
  <div>
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <Link style={isActive(history, '/')} className="nav-link" to="/">Home</Link>
      </li>

      {isAuth() && isAuth().user.role === 0 && (
        <li className="nav-item">
        <Link style={isActive(history, '/user/dashboard')} className="nav-link" to="/user/dashboard">User Dashboard</Link>
      </li>
      )}

      {isAuth() && isAuth().user.role === 1 && (
        <li className="nav-item">
        <Link style={isActive(history, '/admin/dashboard')} className="nav-link" to="/admin/dashboard">Admin Dashboard</Link>
      </li>
      )}

      {!isAuth() && (
        <Fragment>
          <li className="nav-item">
          <Link style={isActive(history, '/signin')} className="nav-link" to="/signin">Signin</Link>
          </li>
          <li className="nav-item">
            <Link style={isActive(history, '/signup')} className="nav-link" to="/signup">Signup</Link>
          </li>
        </Fragment>
      )}

      {isAuth() && (
        <Fragment>
          <li className="nav-item">
            <span style={{cursor: "pointer", color: '#ffffff'}} className="nav-link" onClick={()=> signout(() => {
              history.push('/')
            })}>Signout</span>
          </li>
        </Fragment>
      )}
      
    </ul>
  </div>
)

export default withRouter(Menu);