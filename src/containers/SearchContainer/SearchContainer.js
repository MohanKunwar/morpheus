import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Search from '../../components/Search';

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
            <div className='search-page'>
                <div className='search-types'>
                    <Link to='/search/business'>{this.types.business}</Link>
                    <Link to='/search/product'>{this.types.products_services}</Link>
                    {/* <Link to='/search/rooms'>{this.types.rooms}</Link> */}
                </div>
                {/* <searchContext.SearchContextProvider> */}
                    <Switch>
                        <Route path={`${url}/:id`} component={Search} />
                        <Redirect to={`${url}/business`} />
                    </Switch>
                {/* </searchContext.SearchContextProvider> */}
            </div>
        )
    }
}
export default SearchContainer;