import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './userContainer.css';
import UserReviews from '../../components/user/Reviews';
import Requirements from '../../components/user/Requirements';
import CreateRequirement from '../../components/user/CreateRequirement';
import TermsAndConditions from '../../components/user/TermsAndConditions';
// import Navigation from '../../components/Navigation';
import Account from '../../components/user/Account';
import PrivateRoute from '../../helpers/PrivateRoute';
import MyBookings from '../../components/user/MyBookings'


class UserContainer extends Component {

    render() { 
        const currUrl = this.props.match.url
        return (
            <div className='user-container'>
            {/* <Navigation /> */}
            <Switch>
                <PrivateRoute path={`${currUrl}/reviews`} component={UserReviews} />
                <PrivateRoute path={`${currUrl}/requirements`} component={Requirements} />
                <PrivateRoute path={`${currUrl}/account`} component={Account} />
                <Route path={`${currUrl}/terms-and-conditions`} component={TermsAndConditions} />
                <Route path={`${currUrl}/request`} component={CreateRequirement} />
                <PrivateRoute path={`${currUrl}/bookings`} component={MyBookings} />
                <Redirect to={`reviews`} />
            </Switch>
            </div>
        );
    }
}
export default UserContainer;