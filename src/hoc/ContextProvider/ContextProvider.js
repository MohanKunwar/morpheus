import React, { Component } from 'react';
import ContextService from './../../services/index';
import axios from './../../axios';
import API from './../../api';
import AppContext from './Context';

class ContextProvider extends Component {
    state = {
        loggedIn: false
    }
    updateLogin() {
        this.setState({loggedIn: true});
    }
    componentWillMount() {
         const refreshToken = ContextService.getItem('refresh_token');
        if (refreshToken) {
            axios.post(API.user.refreshLoginUrl, { refresh_token: refreshToken }).then(
                response => {
                    if (response.data) {
                        for (let item in response.data) {
                            ContextService.setItem(item, response.data[item]);
                        }
                        this.setState({loggedIn: true})
                    }
                }
            ).catch(error => {
                console.log('error on contextProvider', error);
            })
        }
    }
    componentWillUpdate() {
        console.log('context provider updated');
    }
    render() {
        return (
            <AppContext.Provider value={{
                loggedIn: this.state.loggedIn,
                updateLogin: this.updateLogin
            }}> {this.props.children}</AppContext.Provider>
        );
    }
}
export default ContextProvider;