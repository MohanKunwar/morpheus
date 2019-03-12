import React, { Component } from 'react';
import UserService from './services/User';
import { Route, Switch, Redirect } from 'react-router-dom';
import KhozContext from './services/Context';
import Axios from './services/Axios';

import AppContainer from './containers/AppContainer';
import KhozContainer from './containers/KhozContainer';
class App extends Component {
  state = {
    user: null,
    noUser: false
  }
  getUser = () => {
    Axios.authInstance.get(Axios.API.user.userDetailsUrl)
    .then(response => this.setState({ user: response.data.data }))
  }
  componentWillMount() {
    const refresh_token = UserService.getItem('refresh_token')
    if (refresh_token) {
      Axios.authInstance.get(Axios.API.user.userDetailsUrl).then(
        response => {
          if (response){
            switch (response.status) {
              case 200: {
                this.setState({ user: response.data.data })
                break
              }
              case 401: {
                Axios.instance.post(Axios.API.user.refreshLoginUrl, { refresh_token: refresh_token }).then(
                  response => {
                    switch(response.status) {
                      case 200: {
                        for (let item in response.data) {
                          UserService.setItem(item, response.data[item])
                        }
                       this.getUser()
                        break
                      }
                      case 401: {
                        this.props.history.push('/login')
                        break
                      }
                      default: {
                        this.setState({noUser: true})
                      }
                    }
                    
                  }
                ).catch(error => {
                  console.log('error on refresh token fetch', error);
                })
                break
              }
              default: {
                this.setState({ noUser: true })
                break
              }
            }
          } else {
            this.setState({noUser: true })
          }
          
        }
      ).catch(error => {
        console.log('error on contextProvider', error);
      })
    } else {
      this.setState({ noUser: true })
    }
  }
  render() {
    return (
      this.state.user || this.state.noUser ?
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