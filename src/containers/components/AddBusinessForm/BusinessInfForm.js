import React, { Component } from 'react';
import './AddBusiness.css';
import { Field } from 'react-final-form';
class AddBusiness extends Component {
    render() {
        <div>
        <p>Business Information Form</p>
        <form onSubmit={showResult}>
        {({handelSubmit)} <form insubmit={handelSubmit}>
        <div>
        <label>Business Nmae</label>
        <filed name="Business Name" Component="input" placehoder="Business Name"/>
        </div>
        <div>
        <lable>Email</lable>
        <filed name="Email" Component="input" placehoder="Email"/>
        </div>
        <div>
        <label>Wesite</label>
        <filed name="Wesite" Component="input" placehoder="Wesite"/>
        </div>
        <div>
        <label>Landline Number</label>
        <filed name="Landline Number" Component="input" Placeholder="Landline Number"/>
        </div>
        <div>
        <label>Mobile Number</label>
        <filed name="Mobile Number" Component="input" Placeholder="Mobile Number"/>
        </div>
        <div>
        <label>Business Type</label>
        <filed name="Business Type" Component="input" Placeholder="Business Type"/>
        </div>
        <div>
        <lable>Category</lable>
        <filed name="Category" Component="input" Placeholder="Categroy"/>
        </div>
        <div>
        <label>Distric</label>
        <filed name="Distric" Component="input" Placeholder="Distric"/>
        </div>
        <div>
        <label>Location</label>
        <filed name="Location" Component="input" Placeholder="Location"/>
        </div>

        </form>

        </form>
        
           
                
        )
    }
}

export default AddBusiness;