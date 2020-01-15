import React from 'react';
import Layout from '../core/Layout';
import {isAuth} from '../auth/index';
import{Link} from 'react-router-dom';

const Dashboard = () => {

  const {user: {_id, name, email, role}} = isAuth();

  const userLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">User links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/cart">My cart</Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/profile/update">Update profile</Link>
          </li>
        </ul>
      </div>
    )
  }

  const userInfo = () => {
    return (
      <div className="card md-5">
      <h3 className="card-header">
        User information
      </h3>
      <ul className="list-group">
        <li className="list-group-item">{name}</li>
        <li className="list-group-item">{email}</li>
        <li className="list-group-item">{role === 1 ? "Admin" : "User"}</li>
      </ul>
    </div>
    )
  }

  return(
    <Layout title="Dashboard"
            description={`Gday ${name}`}
            className="container">
      <div className="row">
        <div className="col-3">
          {userLinks()}
        </div>
        <div className="col-9">
          {userInfo()}
        </div>
      </div>

    </Layout>
  )
}

export default Dashboard;