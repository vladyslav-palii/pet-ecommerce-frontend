import React from 'react';
import Layout from '../core/Layout';
import {isAuth} from '../auth/index';
import{Link} from 'react-router-dom';

const AdminDashboard = () => {

  const {user: {_id, name, email, role}} = isAuth();

  const adminLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Admin links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/create/category">Create category</Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/create/product">Create product</Link>
          </li>
        </ul>
      </div>
    )
  }

  const adminInfo = () => {
    return (
      <div className="card md-5">
      <h3 className="card-header">
        Admin information
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
          {adminLinks()}
        </div>
        <div className="col-9">
          {adminInfo()}
        </div>
      </div>

    </Layout>
  )
}

export default AdminDashboard;