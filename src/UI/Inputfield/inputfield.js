import React, { Component } from 'react'
import { Field } from "react-final-form";
import './inputfield.css';

class Inputfield extends Component {
render(){
    return(
        <div>
         <Field
                component="input"
                className="login-form-field"
                name={this.props.inputname}
                type={this.props.inputtype}
                placeholder={this.props.placeholder}
                disabled={this.props.submitting}
              />   
        </div>
    )
}
}

export default Inputfield;