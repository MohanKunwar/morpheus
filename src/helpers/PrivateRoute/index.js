import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import KhozContext from '../../services/Context';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
    {...rest}
    render={props => rest.context.user 
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/khoz/login',
            state: {from: props.location}
        }}
    />
    } />
)
export default KhozContext.withAppContext(PrivateRoute);