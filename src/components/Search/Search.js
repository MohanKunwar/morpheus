import React, {Component} from 'react';
import searchContext from '../../services/Context/SearchContext';

import SearchFilters from './Filters';
import SearchResults from './Results';
class Search extends Component {

    componentWillMount() {
        let paramObject = {}
        let searchParams = (window.location.search.split('?'))[1].split('&')

        searchParams.forEach(param => {
            let item = param.split('=')
            if (item.length > 1) {
                paramObject[item[0]] = item[1]
            } else {
                paramObject[item[0]] = true
            }

        })
        if (paramObject.category) {
            this.props.context.setCategory(paramObject.category)
        }
        console.log('serach paramas', paramObject)
    }
    render() {
        return (
            <searchContext.SearchContext.Consumer>
                {context => (
                    <div className='search-container'>
                        <SearchFilters type={this.props.match.params.id} context={context} />
                        <SearchResults type={this.props.match.params.id} context={context} />
                    </div>
                )}
            </searchContext.SearchContext.Consumer>
        )
    }
}
export default Search;