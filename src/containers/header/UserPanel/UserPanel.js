import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppContext from './../../../hoc/ContextProvider/Context';

import './UserPanel.css';
// import Login from './Login/Login';
// import Register from'./Register/Register';
class UserPanel extends Component {

    componentWillUpdate() {
        console.log('uiser panel updated');
    }
    render() {
        // console.log('render userpanel', {context.loggedIn)
        return (
            <AppContext.Consumer>
                {context => (
                    <Panel loggedIn={context.loggedIn} />
                )
                }
            </AppContext.Consumer>
        );
    }
}
const Panel = (props) => {
    let userPanel = null;
    if (!props.loggedIn) {
        userPanel = (
            <div className='user-panel'>
                <ul>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Join</Link></li>
                    <li ><Link to='/register-business'>Add Business<span>&#124;</span></Link></li>
                </ul>
            </div>)
    } else {
        userPanel = (
            <div className='user-panel'>
                <ul>
                    <li><Link to='/login'>logged IN</Link></li>
                    <li><Link to='/register'>Joined</Link></li>
                    <li ><Link to='/register-business'>Add Business<span>&#124;</span></Link></li>
                </ul>
            </div>)
    }
    console.log(userPanel);
    return userPanel;
}
export default UserPanel;