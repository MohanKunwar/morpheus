import React, { Component } from 'react'
import Modal from './../../../../UI/Modal/Modal';
import Hoc from './../../../../hoc/Hoc';
class Register extends Component {
    state = {
        backDropType: 'none'
    }
    render() {
        let showRegister = null;
        if (this.props.show) {
            showRegister = (
            <Modal show={this.props.show} backDropType={this.state.backDropType} >
                <Hoc>
                <p>Register form goes here!</p>
                </Hoc>
            </Modal>);
        }
        return showRegister;
    }
}

export default Register;