import React, { Component } from 'react'
import Modal from './../../../UI/Modal/Modal';
// import Hoc from './../../../hoc/Hoc';
import './Login.css';
// import axios from './../../../axios';
class Login extends Component {
    state = {
        backDropType: 'none',
        LoginForm: {
            emailOrNumber: '',
            password: ''
        }
    }
    handleChanges = () => {
        console.log();

        // this.setState({ this.state.LoginForm[password]: event.target.value });
        // this.setState({this.state.LoginForm[$event.target.]})
    }
    loginClicked() {
        // axios.post()
        // console.log(this.state.LoginForm);
    }
    render() {
        let showLogin = null;
        if (this.props.show) {
            showLogin = (
                <Modal show={this.props.show} backDropType={this.state.backDropType} >
                    <div className='login'>
                        <form onSubmit={this.submitLogin}>
                            <span>Email/Mobile Number</span>
                            <input type='text'
                                className='input-login'
                                defaultalue={this.state.LoginForm.emailOrNumber}
                                onChange={this.handleChanges()} />
                            <span>Password</span>
                            <input type='password'
                                className='input-login'
                                value={this.state.LoginForm.password}
                                onChange={this.handleChanges} />
                            <button className='submit-btn' type='submit'>Sign In</button>
                        </form>
                    </div>
                </Modal>);
        }
        return showLogin;
    }
}

export default Login;