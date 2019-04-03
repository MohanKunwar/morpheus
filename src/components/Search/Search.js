import React from 'react';
import './Search.css';
import SearchFilters from './Filters';
import RoomSearch from './RoomSearch'

const Search = props => {

    let filters = null

    let searchParams = window.location.search ? (window.location.search.split('?'))[1].split('&') : null
    let contextObject = {}
    if (searchParams) {
        searchParams.forEach(param => {
            let item = param.split('=')
            if (item.length > 1) {
                contextObject[item[0]] = decodeURIComponent(item[1])
            }
        })
    } else {
        contextObject['q'] = null
    }
    filters = contextObject

    return (
        <div className='search-container'>
        {
            props.match.params.id === 'room'
            ? <RoomSearch />
            : <SearchFilters type={props.match.params.id} filters={filters} />
        }
            
        </div>
    )
}
export default Search;