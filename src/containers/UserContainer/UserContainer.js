import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserReviews from '../../components/user/Reviews';
import Requirements from '../../components/user/Requirements';
class UserContainer extends Component {

    render() {
        const currUrl = this.props.match.url
        return (
            <div className='user-container'>
            <Switch>
                <Route path={`${currUrl}/reviews`} component={UserReviews} />
                <Route path={`${currUrl}/requirements`} component={Requirements} />
                <Redirect to={`${currUrl}/reviews`} />
            </Switch>
            </div>
        );
    }
}
export default UserContainer;