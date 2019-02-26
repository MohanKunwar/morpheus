import React, { Component } from 'react';
import UserService from './services/User';
import { Route, Switch, Redirect } from 'react-router-dom';
import KhozContext from './services/Context';
import Axios from './services/Axios';

import AppContainer from './containers/AppContainer';
import KhozContainer from './containers/KhozContainer';
class App extends Component {
  state = {
    user: null
  }
  componentWillMount() {
    const refresh_token = UserService.getItem('refresh_token')
    if (refresh_token) {
      Axios.authInstance.get(Axios.API.user.userDetailsUrl).then(
        response => {
          switch (response.status) {
            case 200: {
              this.setState({ user: response.data.data })
              break
            }
            case 401: {
              Axios.instance.post(Axios.API.user.refreshLoginUrl, { refresh_token: refresh_token }).then(
                response => {
                  for (let item in response.data) {
                    UserService.setItem(item, response.data[item])
                  }
                  Axios.authInstance.get(Axios.API.user.userDetailsUrl)
                    .then(response => this.setState({ user: response.data.data }))
                }
              ).catch(error => {
                console.log('error on refresh token fetch', error);
              })
              break
            }
            default: {
              this.setState({ user: 'none' })
              break
            }
          }
          console.log('app response', response)
          if (response.data) {
            // for (let item in response.data) {
            //   UserService.setItem(item, response.data[item]);
            // }
          } else {
            this.setState({ user: 'none' })
          }
        }
      ).catch(error => {
        console.log('error on contextProvider', error);
      })
    } else {
      this.setState({ user: 'none' })
    }
    // }
  }
  render() {
    return (
      this.state.user ?
      (<div>
        <KhozContext.AppContextProvider user={this.state.user}>
          <Switch>
            <Route path='/khoz' component={KhozContainer} />
            <Route path='/' component={AppContainer} />
            <Redirect to='/' />
          </Switch>
        </KhozContext.AppContextProvider>
      </div>)
      : <div>Loading</div>
    )
  }
}

export default App;


// import { Route, Switch, Redirect } from 'react-router-dom';
// import Layout from './hoc/Layout/Layout';

// import Home from './pages/Home/Home';
// import Search from './pages/Search/Search';

// import Requirements from './containers/components/Requirements/Requirements';
// // import RegisterBusiness from './pages/RegisterBusiness/RegisterBusiness';
// import BusinessProfile from './pages/BusinessProfile/BusinessProfile';
// import Register from './pages/Register/Register';
// import ConfirmMobileCode from './pages/ConfirmMobileCode/ConfirmMobileCode';
// import Login from './pages/Login/Login';
// import Reviews from './pages/Reviews/Reviews';
// import PrivateRoute from './PrivateRoute';

      // <Layout>
        //   <Switch>
        //     <Route path='/register' component={Register} />
        //     <Route path='/confirm-mobile-code' component={ConfirmMobileCode} />
        //     <Route path='/login' component={Login} />
        //     <Route path='/reviews' component={Reviews} />
        //     <Route path='/requirements' component={Requirements} />
        //     <Route path='/business/:id' component={BusinessProfile} />
        //     <Route path='/search' component={Search} />
        //     <Route path='/home' component={Home} />
        //     <Redirect to='/home' />
        //   </Switch>
        // </Layout>