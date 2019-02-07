import React, { Component } from 'react';
import './AddBusiness.css';
import { Field } from 'react-final-form';
class AddBusiness extends Component {
    render() {
        return (
            <div> 
            <h1>Khozinfo Registration Form</h1>
                <form
                onlogin={onlioin}
                initialValues={{ stooge: 'larry', employed: false }}
                render={({ handlelogin, form, submitting, pristine, values })} => (
                    <form onlogin={handlelogin})>

            </div>
            <div>  
            <label>Username</label>
            <Field
            name="Username"
            Component="import"
            type="text"
            placeholder="Username"
            />
            </div>
            <div>
            <leble>Mobile Number or Email Address</leble>
            <form
            name="Mobile Number or Email Address"
            Component="import"
            type="text"
            placeholder="Mobile Number or Email Address"
            />
            </div>

            <div>
            <label>Password</label>
            <form
            name="Password"
            Component="import"
            type="text"
            placeholder="Password"
            />
            </div>
            <div className="Login"
            <button
            type="button"
            disabled={Login}>
            Login
            </button>
            

        
    }
}

export default AddBusiness;