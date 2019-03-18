import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import KhozContext from '../../../services/Context';

// import MyEmail from './MyProfile';
import './Account.css';
import MyPicture from './MyPicture';
import MyProfile from './MyProfile';
import MyPassword from './MyPassword';

class Account extends Component {
    render() {
        const currUrl = this.props.match.url
        console.log('url for account', currUrl)
        return (
            <div className='card-container user-account'>
                <div className='side-bar'>
                    <ul>
                        <li><NavLink to={`${currUrl}/profile`}className="sidebar_link">My Details</NavLink></li>
                        <li><NavLink to={`${currUrl}/picture`} className="sidebar_link">My Profile Picture</NavLink></li>
                        <li><NavLink to={`${currUrl}/password`}className="sidebar_link">My Password</NavLink></li>
                    </ul>
                </div>
                <div className='edit-panel'>
                <Switch>
                    <Route path={`${currUrl}/picture`} component ={() => <MyPicture user={this.props.context.user} />} />
                    <Route path={`${currUrl}/profile`} component ={() => <MyProfile user={this.props.context.user} />} />
                    <Route path={`${currUrl}/password`} component ={() => <MyPassword user={this.props.context.user} />} />
                    <Redirect to={`${currUrl}/profile`} />
                </Switch>
                </div>
            </div>
        )
    }
}
export default KhozContext.withAppContext(Account);