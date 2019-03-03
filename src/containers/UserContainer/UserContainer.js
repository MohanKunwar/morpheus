import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserReviews from '../../components/user/Reviews';

class UserContainer extends Component {

    render() {
        const currUrl = this.props.match.url
        return (
            <div className='user-container'>
            <Switch>
                <Route path={`${currUrl}/reviews`} component={UserReviews} />
                {/* <Route path={`${currUrl}/404`} component={404Page} /> */}
                <Redirect to={`${currUrl}/reviews`} />
            </Switch>
            </div>
        );
    }
}
export default UserContainer;