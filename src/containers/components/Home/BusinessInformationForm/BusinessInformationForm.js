import React, { Component } from 'react';
import './AddBusiness.css';
import { Field } from 'react-final-form';

class BusinessInformationForm extends Component {
    render() {
        return (
            <div>
            <p>Business Information Form</p>
            <form>
                <div>
                    <label>Business Nmae</label>
                    <Field name="Business Name" Component="input" placehoder="Business Name"/>
                </div>
                <div>
                    <lable>Email</lable>
                    <Field  name="Email" Component="input" placehoder="Email"/>
                </div>
                <div>
                    <label>Wesite</label>
                    <Field name="Wesite" Component="input" placehoder="Wesite"/>
                </div>
                <div>
                    <label>Landline Number</label>
                    <Field  name="Landline Number" Component="input" Placeholder="Landline Number"/>
                </div>
                <div>
                    <label>Mobile Number</label>
                    <Field  name="Mobile Number" Component="input" Placeholder="Mobile Number"/>
                </div>
                <div>
                    <label>Business Type</label>
                    <Field  name="Business Type" Component="input" Placeholder="Business Type"/>
                </div>
                <div>
                    <lable>Category</lable>
                    <Field  name="Category" Component="input" Placeholder="Categroy"/>
                </div>
                <div>
                    <label>Distric</label>
                    <Field  name="Distric" Component="input" Placeholder="Distric"/>
                </div>
                <div>
                    <label>Location</label>
                    <Field  name="Location" Component="input" Placeholder="Location"/>
                </div>
            </form>
        </div>
        );
    }
}

export default BusinessInformationForm;