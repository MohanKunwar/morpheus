import React, { Component } from 'react'
import Modal from './../../../UI/Modal/Modal';
import Hoc from './../../../hoc/Hoc';
class Login extends Component {
    state = {
        backDropType: 'none'
    }
    render() {
        let showLogin = null;
        if (this.props.show) {
            showLogin = (
            <Modal show={this.props.show} backDropType={this.state.backDropType} >
                <Hoc>
                <p>Login form goes here!</p>
                </Hoc>
            </Modal>);
        }
        return showLogin;
    }
}

export default Login;