import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import './AppContainer.css';
// import Aux from './../Aux';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import HomeContainer from './HomeContainer';
import UserContainer from './UserContainer/UserContainer';
import ProductContainer from './ProductContainer';
import RoomContainer from './RoomContainer'
import BusinessContainer from './BusinessContainer';
import BusinessRegister from './../components/BusinessRegister'

class AppContainer extends Component {

    render() {
        const appContainer = (
            <div className="main_container">
                <Header />
                <Navigation />
                <Switch>
                    <Route path='/home' component={HomeContainer} />
                    <Route path='/business/register' component={BusinessRegister} />
                    <Route path='/business/:id' component={BusinessContainer}/>
                    <Route path='/product/:id' component={ProductContainer} />
                    <Route path='/room/:id' component={RoomContainer} />
                    <Route path='/user' component={UserContainer} />
                    <Redirect to='/home' />
                </Switch>
                <Footer /> 
            </div>
        )

        return (appContainer);
    }
}

export default AppContainer;