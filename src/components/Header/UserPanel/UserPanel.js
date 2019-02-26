import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import KhozContext from '../../../services/Context';

import './UserPanel.css';
class UserPanel extends Component {

    componentWillUpdate() {
        console.log('uiser panel updated');
    }
    render() {

        console.log('context rerender from userpanel ');
        // console.log('render userpanel', {context.loggedIn)
        return (
            <div className='user-panel'>
                <KhozContext.AppContext.Consumer>
                    {context => (
                        context.user
                            ? (
                                <ul>
                                    <li><Link to='/khoz/login'>Login</Link></li>
                                    <li><Link to='/khoz/register'>Join</Link></li>
                                    <li ><Link to='/business/register'>Add Business<span>&#124;</span></Link></li>
                                </ul>)
                            : <Panel user={context.user} logout={context.logout} />
                    )
                    }
                </KhozContext.AppContext.Consumer>
            </div>
        );
    }
}
export default UserPanel;

const Panel = (props) => {
    let user = props.context.user
    let getUserDropdown = (user) => {
        return (
            <div className='user-dropdown'>
                <span>Hi {user.name} </span>
                <br />
                <span>My Account</span>
                <br />
                <span>Business</span>
                {
                    user.businesses.length > 0 ?
                        <div className='user-businesses'>
                            {
                                user.businesses.map(business =>
                                    <div>{business.name}</div>
                                )
                            }
                        </div>
                        : <div></div>
                }
                <span onClick={(e) => props.logout(e)}>Logout</span>
            </div>
        )
    }
    console.log('user panel props', props)
    return (
        <ul>
            <li>notifications</li>
            <li>
                <img src={user.photo} alt={props.context.user.name} />
                <button onClick={getUserDropdown(user, props.logout)} />
            </li>
        </ul>
    )
}
