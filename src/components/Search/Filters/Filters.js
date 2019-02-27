import React, { Component } from 'react';
import SearchResults from '../Results';
import Axios from '../../../services/Axios';
class SearchFilters extends Component {
    state = {
        categories: null,
        locations: null,
        filters: this.props.filters
    }
    componentWillMount() {
        this.getCategories()
        // this.getLocations()

    }
    getCategories() {
        Axios.instance.get(Axios.API.common.topLevelCategoriesUrl).then(response => {
            if (response) {
                this.setState({ categories: response.data.data })
                console.log(this.state.categories)
            }
        });
    }
    
    getLocations() {
        Axios.instance.get(Axios.API.common.getLocationsUrl).then(response => {
            if (response) {
                this.setState({ locations: response.data.data })
            }
        })
    }
    handleChange(e) {
        e.preventDefault()
        this.setState({...prevState => ({...prevState, filters: {...prevState.filters, location: e.target.value}})})
    }
    render() {
        return (
            this.state.categories && this.state.locations ?
            <div>
                <div className='category-filter'>
                    <p>Select Category</p>
                    <select id="lang" onChange={this.handleChange.bind(this)} value={this.state.filters.category}>
                       {
                           this.state.categories.map(category => {
                               return (<option value={category.name}>{category.name}</option>)
                           })
                       }
                    </select>
                </div>
                {
                    //    this.state.categories && this.state.locations 
                    this.state.categories
                        ? <SearchResults type={this.props.type} filters={this.state.filters} />
                        : <div>loading</div>
                }
            </div>
            : <div>loading</div>
        )
    }
}
export default SearchFilters;