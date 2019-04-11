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
    let param = props.match.params.id
    document.title = `Khoz-${param.charAt(0).toUpperCase() + param.slice(1).toLowerCase()}`
    return (
        <div className='search-container'>
        {
            param === 'room'
            ? <RoomSearch />
            : <SearchFilters type={param} filters={filters} />
        }
            
        </div>
    )
}
export default Search;