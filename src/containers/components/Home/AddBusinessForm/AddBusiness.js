import React, { Component } from 'react';
import './AddBusiness.css';
import { Field } from 'react-final-form';
class AddBusiness extends Component {
    render() {
        return (
            <div>
            <p>AddBusiness</p>
            <form>
            <div>
                <p>What is the name of your business?</p>
                <label>Enter business name</label>
                <Field name="Enter business name" Component="input" Placehoder="Enter business name"/>
            </div>
            <div>
                <p>Select your business category</p>
                <label>Choose Catogroy</label>
                <Field name="Choose Catogry" Component="Choose Catogry" Placehoder="Choose Catogry"/>
            </div>
            <div>
                <p>Where is your business located?</p>
                <label>Select district</label>
                <Field name="Select district" Component="Select district" Placehoder="Select district"/>
                <label>Select location</label>
                <Field name="Select location" Component="Select location" Placehoder="Select location"/>
            </div>
            <div>
                <label>Enter excat address</label>
                <Field name="Enter excat address" Component="Enter excat address" Placehoder="Enter excat address"/>
            </div>
            <div>
                <p>How can customers contact you?</p>
                <Field name="Example:98********" Component="Example:98********" Placehoder="Example:98********"/>
            </div>
            <div>
                <button type="Register my business" disabled={pristine || invalid}>
                Register my business
                </button>
            </div>
            </form>

            </div>

        );            
    }
}

export default AddBusiness;