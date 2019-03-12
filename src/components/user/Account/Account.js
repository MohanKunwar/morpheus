import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
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
                        <li className='category-btn'><Link to={`${currUrl}/picture`}>My Profile Picture</Link></li>
                        <li className='category-btn'><Link to={`${currUrl}/profile`}>My Details</Link></li>
                        <li className='category-btn'><Link to={`${currUrl}/password`}>My Password</Link></li>
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