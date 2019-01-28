import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import Home from './containers/components/Home/Home';
import Search from './containers/components/Search/Search';

import Reviews from './containers/components/Reviews/Reviews';
import Requirements from './containers/components/Requirements/Requirements';
import Requests from './containers/components/Requests/Requests';
class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/reviews' component={Reviews} />
          <Route path='/requirements' component={Requirements} />
          <Route path='/request' component={Requests} />
          <Route path='/search' component={Search} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
