import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import './AppContainer.css';
// import Aux from './../Aux';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import SearchContainer from './SearchContainer';
import HomeContainer from './HomeContainer';

class AppContainer extends Component {

    render() {
        const appContainer = (
            <div className="main-container'">
                <Header />
                <Navigation />
                <Switch>
                    <Route path='/search' component={SearchContainer} />
                    <Route path='/home' component={HomeContainer} />
                    {/* <Route path='/business' />
                    <Route path='/product' />
                    <Route path='/service' />
                    <Route path='/user' component={UserContainer} /> */}
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )

        return (appContainer);
    }
}

export default AppContainer;