import React, { Component } from 'react';
import Axios from '../../../services/Axios';
class Requirements extends Component {
    componentWillMount() {
        Axios.authInstance.get(Axios.API.user.getUserRequirementsUrl).then(
            response => {
                console.log('response', response.data.data)
            }
        )
    }
    render() {
        return (
            <div>requirements</div>
        )
    }
}

export default Requirements;

