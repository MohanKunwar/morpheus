import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { FaAngleDoubleDown, FaSistrix } from 'react-icons/fa';
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
    selectRef = React.createRef()
    gotoSearch = (e, keypress) => {
        if (!keypress || (e.keyCode === 13 || e.which === 13)) {
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
        this.setState({ query: e.target.value })
    }
    setContext = e => {
        e.preventDefault()
        console.log(e.target.value)
        this.setState({ searchContext: e.target.value })
    }
    openSelect = e => {
            const fieldInput = this.refs.fieldInput
              if (!fieldInput.state.isOpen) {
                fieldInput.handleMouseDown(e);
              }
    }
    render() {
        return (
            <div className='search_bar'>

                <select ref='fieldInput' onChange={e => this.setContext(e)} className="search_select">
                    <option value='business'>Business</option>
                    <option value='room'>Room</option>
                    <option value='product'>Product</option>
                </select>
                <FaAngleDoubleDown onClick={e => this.openSelect(e)} className="searchbar_doubledown" />
                <input
                    autoFocus={true}
                    type='text'
                    className='search-input'
                    onChange={e => this.setQuery(e)}
                    onKeyPress={e => this.gotoSearch(e, 'enter')}
                    placeholder='Hotel, Cafe, Hardware'
                // placeholder="f002"
                />
                <button type='submit' onClick={e => this.gotoSearch(e)} className="searchbar_submit"><FaSistrix className="search-fa_icon"/></button>

            </div>
        );
    }
}
export default withRouter(SearchBar);