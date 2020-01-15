import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import Menu from './core/Menu';
import PrivateRoute from './auth/PrivateRoute'
import AdminRoute from './auth/AdminRoute'
import Dashboard from './user/UserDashboard'
import AdminDashboard from './user/AdminDashboard'
import AddCategory from './admin/AddCategory'


function Routes () {

  return (
  <div className="Routes">
      <BrowserRouter>
        <Menu />
        <Switch>
          <PrivateRoute path="/" exact component={Home}></PrivateRoute>
          <Route path="/signin" exact component={Signin}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <PrivateRoute path='/user/dashboard' exact component={Dashboard}></PrivateRoute>
          <AdminRoute path='/admin/dashboard' exact component={AdminDashboard}></AdminRoute>
          <AdminRoute path='/create/category' exact component={AddCategory}></AdminRoute>
        </Switch>
      </BrowserRouter>
  </div>)
}

export default Routes;

// function Routes() {
//   return (
//     <div className="App">
//       oolool
//     </div>
//   );
// }

// export default Routes;
