import React, { Component } from 'react';
import SearchResults from '../Results';
import Axios from '../../../services/Axios';
import Checkbox from '../../../UI/Search/Checkbox/Checkbox';
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
                response.data.data.map(location =>
                    locations.push(location.name)
                )
                this.setState({ locations: locations })

                console.log(response.data.data)

            }
        })
    }
    handleChange(e, filterType) {
        // e.preventDefault()
        let filters = this.state.filters
        filters[filterType] = e.target.value !== 'All' ? e.target.value : null
        this.setState({ filters: filters })
    }
    handleCheckboxChange(e, filterType) {
        let filters = this.state.filters
        filters[filterType] = filters[filterType] === 1 ? null : 1
        this.setState({filters: filters})
        // e.preventDefault()
    }
    render() {
        return (
            (this.state.categories && this.state.locations) ?
                <React.Fragment>
                    <div className='search-filters'>
                        <div className='category-filter'>
                            <p>Select Category</p>
                            <select onChange={e => this.handleChange(e, 'category')} >
                                <option value='All'>All Categories</option>
                                {
                                    this.state.categories.map((category, index) => {
                                        return (<option key={index} value={category}>{category}</option>)
                                    })
                                }
                            </select>
                        </div>
                        <div className='location-filter'>
                            <p>Select Location</p>
                            <select onChange={e => this.handleChange(e, 'location')} >
                                <option value='All'>All Locations</option>
                                {
                                    this.state.locations.map((location, index) => {
                                        return (<option key={index} value={location}>{location}</option>)
                                    })
                                }
                            </select>
                        </div>
                        <div className='popular-filter'>
                            <span><input type='checkbox' checked={this.state.filters.popular === 1} onChange={e => this.handleCheckboxChange(e, 'popular')} />Popular</span>
                            {/* <Checkbox toggle={e => this.handleChange(e, false)} value={this.state.filters.popular} /> */}
                        </div>
                        <div className='newest-filter'>
                            <span><input type='checkbox'
                                value={this.state.filters.newest} onChange={e => this.handleCheckboxChange(e, 'newest')} />Newest</span>
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
                    <div className='search-results'>
                        <SearchResults type={this.props.type} filters={this.state.filters} />
                    </div>
                </React.Fragment>
                : <div>loading</div>
        )
    }
}
export default SearchFilters;