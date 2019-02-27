import React, { Component } from 'react';
import searchContext from '../../services/Context/SearchContext';

import SearchFilters from './Filters';
class Search extends Component {
    state = {
        filters: null
    }
    componentWillMount() {
        let searchParams = window.location.search ? (window.location.search.split('?'))[1].split('&') : null
        let contextObject = {}
        if (searchParams) {
            searchParams.forEach(param => {
                let item = param.split('=')
                if (item.length > 1) {
                    contextObject[item[0]] = item[1]
                } else {
                    contextObject[item[0]] = true
                }
            })
        } else {
            contextObject['q'] = null
        }
        this.setState({filters: contextObject})
    }
    componentWillUpdate() {
        this.filters = {}
    }
    render() {
        return (
            this.state.filters ?
            (<div className='search-container'>
                <SearchFilters type={this.props.match.params.id} filters={this.state.filters} />
            </div>)
            : <div>loading</div>
        )
    }
}
export default Search;