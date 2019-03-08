import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import KhozContext from '../../../services/Context';

import MyEmail from './MyEmail';
import './Account.css';
const MyProfileImage = props => {

}
const MyDetails = props => {

}
const MyMobile = props => {

}
const MyPassword = props => {

}
class Account extends Component {
    render() {
        const currUrl = this.props.match.url
        console.log('url for account', currUrl)
        return (
            <div className='card-container user-account'>
                <div className='side-bar'>
                    <ul>
                        <li className='category-btn'><Link to={`${currUrl}/image`}>My Avatar</Link></li>
                        <li className='category-btn'><Link to={`${currUrl}/details`}>My Details</Link></li>
                        <li className='category-btn'><Link to={`${currUrl}/email`}>Email</Link></li>
                        <li className='category-btn'><Link to={`${currUrl}/mobile`}>Mobile Number</Link></li>
                        <li className='category-btn'><Link to={`${currUrl}/password`}>Password</Link></li>
                    </ul>
                </div>
                <div className='edit-panel'>
                <Switch>
                    <Route path={`${currUrl}/image`} component ={() => <MyProfileImage user={this.props.context.user} />} />
                    <Route path={`${currUrl}/details`} component ={() => <MyDetails user={this.props.context.user} />} />
                    <Route path={`${currUrl}/email`} component ={() => <MyEmail user={this.props.context.user} />} />
                    <Route path={`${currUrl}/mobile`} component ={() => <MyMobile user={this.props.context.user} />} />
                    <Route path={`${currUrl}/password`} component ={() => <MyPassword user={this.props.context.user} />} />
                    <Redirect to={`${currUrl}/email`} />
                </Switch>
                </div>
            </div>
        )
    }
}
export default KhozContext.withAppContext(Account);