import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import Home from './containers/components/Home/Home';
import Search from './containers/components/Search/Search';

import Reviews from './containers/components/Reviews/Reviews';
import Requirements from './containers/components/Requirements/Requirements';
import AddBusiness from './containers/components/AddBusiness/AddBusiness';

import Register from './pages/Register/Register';
import ConfirmMobileCode from './pages/ConfirmMobileCode/ConfirmMobileCode';
import Login from './pages/Login/Login';
class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/confirm-mobile-code' component={ConfirmMobileCode} />
          <Route path='/login' component={Login} />
          <Route path='/reviews' component={Reviews} />
          <Route path='/requirements' component={Requirements} />
          <Route path='/register-business' component={AddBusiness} />
          <Route path='/search' component={Search} />
          <Route path='/home' component={Home} />
          <Redirect to='/home' /> 
        </Switch>
      </Layout>
    );
  }
}

export default App;
