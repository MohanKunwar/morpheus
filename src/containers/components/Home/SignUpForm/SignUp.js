import React, { Component } from 'react';
import './SignUp.css';
import { Field } from 'react-final-form';
class SignUp extends Component {
    render() {
        return (
            <div>
            <p>Sign Up</p>
            <form>
            <div>
                <label>First Name</label>
                <Field name="First Name" Component="input" Placeholder="First Name"/>
            </div>
            <div>
                <label>Last Name</label>
                <Field name="Last Name" Component="input" Placeholder="Last Name"/>
            </div>
            <div>
                <label>Mobile Number or Emali Address</label>
                <Field name="Mobile Number or Emali Address" Component="input" Placeholder="Mobile Number or Emali Address"/>
            </div>
            <div>
                <label>Password</label>
                <Field name="Password" Component="input" Placeholder="Password"/>
            </div>
            <div>
                <label>Conform Password</label>
                <Field name="Password" Component="input" Placeholder="Conform Password"/>
            </div>
            <div>
                <button type="Sign Up" disabled={pristine || invalid}>
                Sign Up
                </button>
            </div>
            </form>
            </div>
            
        );
   }
}

export default SignUp;