import React, {useState} from 'react';
import Layout from '../core/Layout';
import {isAuth} from '../auth/index';
import{Link} from 'react-router-dom';
import {createCategory} from '../admin/apiAdmin'

const AddCategory = () => {

const [name, setName] = useState('');
const [error, setError] = useState(false);
const [success, setSuccess] = useState(false);

// destructure user and token from localstorage
const {user, token} = isAuth();

const handleChange = (e) => {
  // setError('');
  console.log(e)
  setName(e.target.value);
}

const onSubmit = (e) => {
  e.preventDefault();
  setError('');
  setSuccess(false);
  createCategory(user._id, token, {name })
}

const NewCategoryForm = () => (
  <form onSubmit={onSubmit}>
    <div className="form-group">
      <label className="text-muted">Name</label>
      <input autoFocus type="text" value={name} className="form-control" onChange={handleChange}></input>
    </div>
    <button className="btn btn-outline-primary">Create category</button>
  </form>
)

return (
  <Layout title="Add"
            description="Add a new category"
            className="container">
      <div className="row">
        <div className="col-md-9 offset-md-2">
          {NewCategoryForm()}
        </div>
      </div>

    </Layout>
)

};

export default AddCategory;