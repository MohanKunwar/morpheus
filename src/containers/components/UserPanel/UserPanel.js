import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './UserPanel.css';
import Login from './../Login/Login';
import Register from'./../Register/Register';
class UserPanel extends Component {
    state = {
        showLogin: false,
        showRegister: false
    }
    openLoginModal = () => {
        this.setState({ showLogin: true });
    }
    openRegisterModal = () => {
        this.setState({ showRegister: true });
    }
    render() {
        return (
            <div className='user-panel'>
                <ul>
                    <li>
                        <Button onClick={this.openLoginModal}>Login</Button></li>
                    <li><Button onClick={this.openRegisterModal}>Join</Button></li>
                    <li >Add Business<span>&#124;</span></li>
                </ul>
                <Login show={this.state.showLogin} ></Login>
                <Register show={this.state.showRegister}></Register>
            </div>

        );
    }
}

export default UserPanel;