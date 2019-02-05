import React, {Component} from 'react';
import './SearchBar.css';
class SearchBar extends Component {
    render() {
        return (
            <div className='search-bar'>
            <input type='text' className='search-input'/>
            </div>
        );
    }
}

export default SearchBar;