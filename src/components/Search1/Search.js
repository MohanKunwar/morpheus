import React, { Component } from 'react';
import searchContext from '../../services/Context/SearchContext';

import SearchFilters from './Filters';
import SearchResults from './Results';
class Search extends Component {
    filters = {}
    componentWillMount() {
        console.log('search', this.props.context)
        let searchParams = window.location.search ? (window.location.search.split('?'))[1].split('&') : null
        if (searchParams) {
            let contextObject = {}
            searchParams.forEach(param => {
                let item = param.split('=')
                if (item.length > 1) {
                    // this.props.context.setFilter([item[0]], item[1])
                    contextObject[item[0]] = item[1]
                } else {
                    // this.props.context.setFilter([item[0]], true)
                    contextObject[item[0]] = true
                }
            })
            // console.log('context object', contextObject)
            this.props.context.setFilters(contextObject)
            console.log('search context', this.props.context)
        }
    }
    componentWillUpdate() {
        this.filters = {}
    }
    render() {
        return (
            <div className='search-container'>
                <SearchFilters  type={this.props.match.params.id} context={this.props.context} />
                <SearchResults type={this.props.match.params.id} context={this.props.context} />
            </div>
        )
    }
}
const withContext = (Component) => {
    return (props) => {
        return (<searchContext.SearchContext.Consumer>
            {(context) => {
                return <Component {...props} context={context} />
            }}
        </searchContext.SearchContext.Consumer>)
    }
}
export default withContext(Search);