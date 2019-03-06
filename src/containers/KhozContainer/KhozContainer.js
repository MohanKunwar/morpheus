import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../../components/user/Login';
import Register from '../../components/user/Register';
// import './KhozContainer.css';
// import Aux from './../Aux';
// import Header from '../../containers/header/Header';
// import Navigation from '../../containers/navigation/Navigation';
// import Footer from './../../containers/footer/Footer';
// import axios from './../../axios';
// import API from './../../api';
// import ContextService from './../../services/index';
// import ContextProvider from './../ContextProvider/ContextProvider';

class KhozContainer extends Component {

    render() {
        const currUrl = this.props.match.url
        return (
            <div className='khoz-container'>
            <Switch>
                <Route path={`${currUrl}/login`} component={Login} />
                <Route path={`${currUrl}/register`} component={Register} />
                {/* <Route path={`${currUrl}/404`} component={404Page} /> */}
                <Redirect to={`${currUrl}/login`} />
            </Switch>
            <div className='right-img'>

            </div>
            </div>
        );
    }
}
export default KhozContainer;