import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserReviews from '../../components/user/Reviews';
import Requirements from '../../components/user/Requirements';
import Account from '../../components/user/Account';
import CreateRequirement from '../../components/user/CreateRequirement';
import TermsAndConditions from '../../components/user/TermsAndConditions';
class UserContainer extends Component {

    render() {
        const currUrl = this.props.match.url
        return (
            <div className='user-container'>
            <Switch>
                <Route path={`${currUrl}/reviews`} component={UserReviews} />
                <Route path={`${currUrl}/requirements`} component={Requirements} />
                <Route path={`${currUrl}/request`} component={CreateRequirement} />
                <Route path={`${currUrl}/account`} component={Account} />
                <Route path={`${currUrl}/terms-and-conditions`} component={TermsAndConditions} />
                <Redirect to={`${currUrl}/reviews`} />
            </Switch>
            </div>
        );
    }
}
export default UserContainer;