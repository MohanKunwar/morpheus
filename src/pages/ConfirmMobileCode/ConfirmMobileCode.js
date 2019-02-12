import React, { Component } from 'react';
import axios from './../../axios';
import API from './../../api';
import ContextService from './../../services/index';

class ConfirmMobileCode extends Component {
    code = 0;
    
    componentWillMount() {
        ContextService.getItem('access_token');
    }
    submitCode = ($event) => {
        $event.preventDefault();
        axios.post(API.user.confirmCodeUrl, {confirmation_code: this.code}).then(
            response =>  {
                console.log('confirm response', response);
            }
        )
    }
    onChange = ($event) => {
        $event.preventDefault();
        this.code = $event.target.value;
    }
    render() {
        return (
            <div className="confirm-mobile-code">
                <form onSubmit={this.submitCode.bind(this)}>
                    <label>Enter Mobile confirmation code</label>
                    <input type="number" 
                    defaultValue={this.code} 
                    placeholder="Confirmation Code" 
                    onChange={this.onChange.bind(this)} />
                    <button type='submit'>Send</button>
                </form>
            </div>
        )
    }
}
export default ConfirmMobileCode;