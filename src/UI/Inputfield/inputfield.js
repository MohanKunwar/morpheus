import React, { Component } from 'react'
import { Field } from "react-final-form";
import './inputfield.css';

class Inputfield extends Component {
render(){
    return(
        <div>
            <Field
                component="input"
                className="khoz_form_field"
                name={this.props.name}
                type={this.props.type}
                placeholder={this.props.placeholder}
                />
        </div>
    )
}
}

export default Inputfield;