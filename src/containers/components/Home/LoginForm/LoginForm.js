import React, { Component } from 'react';
import './LoginForm.css';
import { Field } from 'react-final-form';
class LoginForm extends Component {
    render() {
        return (
            <div>
            <p>Login</p>
            <form>
            <div>
                <label>User Name</label>
                <Field name="User Name" Component="input" Placeholder="User Name"/>
            </div>
            <div>
                <label>Mobile Number or Email Address</label>
                <Field name="Mobile Number or Email Address" Component="input" Placeholder="Mobile Number or Email Address"/>
            </div>
            <div>
                <label>Password</label>
                <Field name="Password" Component="input" Placeholder="Password"/>
            </div>
            <div>
                <button type="Login" disabled={pristine || invalid}>
                Login
                </button>
            </div>              
            </form>
            </div>

        );            
    }
}

export default LoginForm;