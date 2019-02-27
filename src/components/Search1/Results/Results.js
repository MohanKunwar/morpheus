import React, { Component } from 'react';
import Axios from '../../../services/Axios'
import BusinessCard from '../../../UI/BusinessCard/BusinessCard';
class SearchResults extends Component {
    state = {
        results: null
    }
    componentWillUpdate() {
        // this.setState({results: null})
        // this.buildQuery(this.props.context)
    }
    buildQuery = filters => {
        let query = '';
        if (filters.q) {
            query += `q=${filters.q}&`
        }
        if (filters.category) {
            query += `category=${filters.category}&`
        }
        if (filters.location) {
            query += `location=${filters.location}&`
        }
        if (filters.newest) {
            query += `newest&`
        }
        if (filters.popular) {
            query += `popular&`
        }
        if (filters.highest_rated) {
            query += `highest_rated&`
        }

        if (query) {
            console.log('type', this.props.type)
            Axios.instance.get(Axios.API.search.getResults(this.props.type, query.substr(0, query.lastIndexOf('&')))).then(
                response => {
                    if (response) {
                        console.log('response', response)
                        this.setState({
                            results: response.data.data.map(item => {
                                return {
                                    name: item.name,
                                    id: item.id,
                                    category_name: item.category.name,
                                    address: item.address,
                                    logo: item.logo,
                                    view_count: item.view_count,
                                    review_count: item.review_count,
                                    rating_avg: item.rating_avg
                                }
                            })
                        })
                    }

                })
        }
    }
    render() {
        let items
        if (this.props.context.filters && !this.state.results) {
            this.buildQuery(this.props.context.filters)
        }
        if (this.state.results) {
            console.log('state', this.state.results)
            switch (this.props.type) {
                case 'business': {
                    items = this.state.results.map((result, index) => <BusinessCard key={index} business={result} />)
                    break
                }
                case 'product': {
                    // items = this.state.results.map((result, index) => <div ></div>)
                    break
                }
                default: {
                    break
                }
            }
        }

        return (
            <div className='search-results-container'>
                {items}
            </div>
        )
    }
}

export default SearchResults;