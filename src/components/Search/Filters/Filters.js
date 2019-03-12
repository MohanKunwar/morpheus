import React, { Component } from 'react';
import SearchResults from '../Results';
import Axios from '../../../services/Axios';
import './searchfilter.css';
class SearchFilters extends Component {
    filters = this.props.filters
    type = this.props.type
    state = {
        categories: null,
        locations: null,
        filterChanged: null
    }
    componentWillMount() {
        if (!this.state.categories) {
            this.getCategories()
        }
        if (!this.state.locations) {
            this.getLocations()
        }

    }
    componentWillReceiveProps(nextProps) {
       this.filters = nextProps.filters
       this.type = nextProps.type
       this.setState({filterChanged: 'reset'})
    }
    getCategories() {
        Axios.instance.get(Axios.API.common.topLevelCategoriesUrl).then(response => {
            if (response.data) {
                this.setState({ categories: response.data.data })
            }
        });
    }

    getLocations() {
        Axios.instance.get(Axios.API.common.getLocationsUrl).then(response => {
            if (response) {
                let locations = []
                response.data.data.map(location => locations.push(location.name))
                this.setState({ locations: locations})
            }
        })
    }
    handleChange(e, filterType) {
        this.filters[filterType] = e.target.value !== 'All' ? e.target.value : null
        this.setState({filterChanged: filterType})
        // let filters = this.state.filters
        // filters[filterType] = 
        // this.setState({ ...this.state, filters: filters })
    }
    handleCheckboxChange(e, filterType) {
        this.filters[filterType] = this.filters[filterType] === '1' ? null : '1'
        this.setState({filterChanged: filterType})
        // let filters = this.state.filters
        // filters[filterType] = filters[filterType] === '1' ? null : '1'
        // this.setState({ filters: filters })
    }
    render() {
        return (
            (this.state.categories && this.state.locations) ?
                <React.Fragment>
                    <div className='search-filters'>
                        <div className='category-filter'>
                            <p>Select Category</p>
                            <select 
                                onChange={e => this.handleChange(e, 'category')} 
                                defaultValue={this.filters.category}
                                value={this.state.filterChanged === 'reset' ? 'All' : this.filters.category}>
                                <option value='All'>All Categories</option>
                                {
                                    this.state.categories.map((category, index) => {
                                        return (<option
                                            key={index}
                                            value={category.slug.trim()}
                                        >{category.name}</option>)
                                    })
                                }
                            </select>
                        </div>
                        <div className='location-filter'>
                            <p>Select Location</p>
                            <select 
                                onChange={e => this.handleChange(e, 'location')} 
                                defaultValue={this.filters.location} 
                                value={this.state.filterChanged === 'reset' ? 'All' : this.filters.location}>
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
                                    // defaultChecked={this.filters.popular==='1'}
                                    onChange={e => this.handleCheckboxChange(e, 'popular')} 
                                    checked={this.state.filterChanged === 'reset' ? false : this.filters.popular === '1' ? 'checked' : false}/>Popular
                            </span>
                        </div>
                        <div className='newest-filter'>
                            <span>
                                <input type='checkbox'
                                    // defaultChecked={this.filters.newest==='1'}
                                    onChange={e => this.handleCheckboxChange(e, 'newest')} />Newest</span>
                        </div>
                        {
                            this.filters.highest_rated
                                ?
                                <div className='rated-filter'>
                                    {
                                    }
                                </div>
                                : null
                        }
                    </div>
                    <SearchResults type={this.type} filters={this.filters} />
                </React.Fragment>
                : <div>loading</div>
        )
    }
}
export default SearchFilters;