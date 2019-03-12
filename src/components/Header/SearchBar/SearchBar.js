import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import './searchbar.css';
class SearchBar extends Component {
    state = {
        searchContext: 'business',
        query: null
    }
    componentWillMount() {
        this.setState({
            query: null
        })
    }
    gotoSearch = (e, keypress) => {
        if (!keypress || (e.keyCode === 13 || e.which === 13))
        {
            // e.preventDefault()
            let url = `/search/${this.state.searchContext}`
            if (this.state.query) {
                url += `?q=${this.state.query}` 
            }
            this.props.history.push(url)
        }
       
    }
    setQuery = e => {
        e.preventDefault()
        this.setState({query: e.target.value})
    }
    setContext = e => {
        e.preventDefault()
        console.log(e.target.value)
        this.setState({searchContext: e.target.value})
    }
    render() {
        return (
            <div className='search-bar'>
            <div>
                <select onChange={e => this.setContext(e)} className="search_select">
                    <option value='business'>Business</option>
                    <option value='room'>Room</option>
                    <option value='product'>Product</option>
                </select>
                </div>
                <div>
                <input 
                type='text' 
                className='search-input' 
                onChange={e => this.setQuery(e)} 
                onKeyPress={e => this.gotoSearch(e, 'enter')} 
                placeholder='Hotel, Cafe, Hardware'
                // placeholder="f002"
                />
                <button type='submit' onClick={e => this.gotoSearch(e)} className="searchbar_submit">Search</button>
                </div>
            </div>
        );
    }
}
export default withRouter(SearchBar);