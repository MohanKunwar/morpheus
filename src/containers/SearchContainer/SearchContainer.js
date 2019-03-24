import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Search from '../../components/Search';
import Header from '../../components/Header';

class SearchContainer extends Component {
    types = {
        business: 'Business',
        products_services: 'Product/Services',
        rooms: 'Book Room'
    }
    render() {
        // const currUrl = this.props.match.url
        const { match: { url } } = this.props
        return (
            <React.Fragment>
                <Header />
                <div className='card-container'>
                    <div className='search-types'>
                        <NavLink className='require_status' to='/search/business'>{this.types.business}</NavLink>
                        <NavLink className='require_status' to='/search/product'>{this.types.products_services}</NavLink>
                        <NavLink to='/search/room' className='require-status'>{this.types.rooms}</NavLink>
                    </div>
                    <Switch>
                        <Route path={`${url}/:id`} component={Search} />
                        <Redirect to={`${url}/business`} />
                    </Switch>
                </div>
            </React.Fragment>
        )
    }
}
export default SearchContainer;