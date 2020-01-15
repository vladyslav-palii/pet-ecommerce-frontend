import React, {useState} from 'react';
import Layout from '../core/Layout';
import {Link, Redirect} from 'react-router-dom';
import {signin, authenticate, isAuth} from '../auth'

// admin3@gmail.com
// 12345678

const Signin = () => {

  const [values, setValues] = useState({
    email: 'admin1@admin.com',
    password: 'admin56',
    error: '',
    loading: false,
    redirectToReferrer: false
  });

  const {email, password, error, loading, redirectToReferrer} = values; // object descruct //redirectToReferrer - redirect user to dashboard
  const {user} = isAuth();

  // HOF - higher order function - function that return another function
  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value})
  }


  const clickSubmit = (e) => {
     e.preventDefault();

     setValues({...values, error: false, loading: true})

     signin({email, password})
     .then(data => {
       if(data.error) {
         setValues({...values, error: data.error, loading: false, redirectToReferrer: false})
       }
       else {
        authenticate(data, () => {
          setValues({...values, redirectToReferrer: true})
        })
       }
     })
  }

  const signInForm = () => (
    <form>

      <div className="form-group">
        <label className="text-muted">Email</label>
        <input onChange={handleChange("email")} type="email" className="form-control" value={email}></input>
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input onChange={handleChange("password")} type="password" className="form-control" value={password}></input>
      </div>
      <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
    </form>
  );

  const showError = () => {
    return (
      <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
        {error}
      </div>
    )
  }

  const showLoading = () => {
    return (
      <div className="alert alert-info" style={{display: loading ? "" : "none"}}>
        <h2>Loading...</h2>
      </div>
    )
  }
  
  const redirectUser = () => {
    if(redirectToReferrer) {
      if(user && user.role ===1) {
        return <Redirect to="/admin/dashboard"/>
      }
      else {
        return <Redirect to="/user/dashboard"/>
      }
    }
    if(isAuth()) {
      return <Redirect to="/"/>
    }
  }

  return (
    <Layout title="Signin" description="Signin page" className="container col-md-8 offset-md-2">
      {showError()}
      {showLoading()}
      {signInForm()}
      {redirectUser()}
      {/* {JSON.stringify(values)} */}
    </Layout>
  )
}

export default Signin;