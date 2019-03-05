import React, { Component } from 'react';
import SearchResults from '../Results';
import Axios from '../../../services/Axios';
import './searchfilter.css';
class SearchFilters extends Component {
    state = {
        categories: null,
        locations: null,
        filters: this.props.filters
    }
    componentWillMount() {
        if (!this.state.categories) {
            this.getCategories()
        }
        if (!this.state.locations) {
            this.getLocations()
        }

    }
    getCategories() {
        Axios.instance.get(Axios.API.common.topLevelCategoriesUrl).then(response => {
            if (response) {
                let categories = []
                response.data.data.map(category =>
                    categories.push(category.name)
                )
                this.setState({ categories: categories })
                console.log(response.data.data)
            }
        });
    }

    getLocations() {
        Axios.instance.get(Axios.API.common.getLocationsUrl).then(response => {
            if (response) {
                let locations = []
                response.data.data.map(location => locations.push(location.name))
                this.setState({ locations: locations })
            }
        })
    }
    handleChange(e, filterType) {
        let filters = this.state.filters
        filters[filterType] = e.target.value !== 'All' ? e.target.value : null
        this.setState({ ...this.state, filters: filters })
    }
    handleCheckboxChange(e, filterType) {
        let filters = this.state.filters
        filters[filterType] = filters[filterType] === '1' ? null : '1'
        this.setState({ filters: filters })
    }
    render() {
        return (
            (this.state.categories && this.state.locations) ?
                <React.Fragment>
                    <div className='search-filters'>
                        <div className='category-filter'>
                            <p>Select Category</p>
                            <select onChange={e => this.handleChange(e, 'category')} defaultValue={this.state.filters.category}>
                                <option value='All'>All Categories</option>
                                {
                                    this.state.categories.map((category, index) => {
                                        return (<option
                                            key={index}
                                            value={category}
                                        >{category}</option>)
                                    })
                                }
                            </select>
                        </div>
                        <div className='location-filter'>
                            <p>Select Location</p>
                            <select onChange={e => this.handleChange(e, 'location')} defaultValue={this.state.filters.location} >
                                <option value='All'>All Locations</option>
                                {
                                    this.state.locations.map((location, index) => {
                                        return (<option key={index} value={location}>{location}</option>)
                                    })
                                }
                            </select>
                        </div>
                        <div className='popular-filter'>
                            <span>
                                <input type='checkbox'
                                    defaultChecked={this.state.filters.popular==='1'}
                                    onChange={e => this.handleCheckboxChange(e, 'popular')} />Popular
                            </span>
                        </div>
                        <div className='newest-filter'>
                            <span>
                                <input type='checkbox'
                                    defaultChecked={this.state.filters.newest==='1'}
                                    onChange={e => this.handleCheckboxChange(e, 'newest')} />Newest</span>
                        </div>
                        {
                            this.state.filters.highest_rated
                                ?
                                <div className='rated-filter'>
                                    {
                                    }
                                </div>
                                : null
                        }
                    </div>
                    <SearchResults type={this.props.type} filters={this.state.filters} />
                </React.Fragment>
                : <div>loading</div>
        )
    }
}
export default SearchFilters;