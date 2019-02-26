import React, {Component} from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import Search from '../../components/Search';
class SearchContainer extends Component {
    // state = {
    //     type: 'business' // default
    // }
    types = {
        business: 'Business',
        products_services: 'Product/Services',
        rooms: 'Book Room'
    }
    // changeType = (e, type) => {
    //     e.preventDefault()
    //     this.setState({type: type})
    // }
    render() {
        // const currUrl = this.props.match.url
        const {match : { url }} = this.props
        // let type = this.state.type
        return (
            <div className='search-page'>
            <div className='search-types'>
                <Link to='/search/business'>{this.types.business}</Link>
                <Link to='/search/products_services'>{this.types.products_services}</Link>
                {/* <Link to='/search/rooms'>{this.types.rooms}</Link> */}
                {/* <button onClick={e => this.changeType(e, 'business')}>{this.types.business}</button>
                <button onClick={e => this.changeType(e, 'products')}>{this.types.products_services}</button>
                <button onClick={e => this.changeType(e, 'rooms')}>{this.types.rooms}</button> */}
            </div>

            <Switch>
            <Route path={`${url}/:id`} component={Search} />
            <Redirect to={`${url}/business`}  />
        </Switch>
        </div>
        )
    }
}
export default SearchContainer;