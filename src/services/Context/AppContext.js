import React, { Component } from 'react';
export const AppContext = React.createContext();

export class AppContextProvider extends Component {
    state = {
        user: this.props.user
    }
    logout = (e) => {
        e.preventDefault()
        this.setState({ user: null })
        localStorage.clear()
    }
    login = (user) => {
        this.setState({user: user})
        console.log('user is context', user)
    }

    render() {
        return (
            <AppContext.Provider value={{
                ...this.state,
                logout: this.logout,
                login: user => this.login(user)
             }}> {this.props.children}</AppContext.Provider>
        );
    }
}
