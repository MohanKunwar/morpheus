import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Axios from '../../../services/Axios'
import BusinessCard from '../../../UI/BusinessCard/BusinessCard';
import './Results.css';
class SearchResults extends Component {
    newItems = []
    state = {
        filters: this.props.filters,
        noResult: false
    }
    componentWillReceiveProps() {
        console.log('search results filters', this.state.filters)
        this.buildQuery(this.props.filters)
        // }
    }
    componentWillMount() {
        this.buildQuery(this.props.filters)
        console.log('results mount', this.props.filters)
    }
    navigateToItem = (e, type, id) => {
        e.preventDefault()
        this.props.history.push(`/${type}/${id}`)
    }
    buildQuery = filters => {
        let query = '';
        if (filters.q) {
            query += `q=${filters.q}&`
        } else {
            query += 'q=""&'
        }
        if (filters.category) {
            query += `category=${filters.category}&`
        }
        if (filters.location) {
            query += `location=${filters.location}&`
        }
        if (filters.newest) {
            query += `newest=1&`
        }
        if (filters.popular) {
            query += `popular=1&`
        }
        if (filters.highest_rated) {
            query += `highest_rated=1&`
        }
        console.log('query', query)
        if (query) {
            this.setState({ results: null })
            console.log('type', this.props.type)
            Axios.instance.get(Axios.API.search.getResults(this.props.type, query.substr(0, query.lastIndexOf('&')))).then(
                response => {
                    if (response) {
                        if (response.data.data.length > 0) {
                        switch (this.props.type) {
                            case 'business': {
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
                                    }),
                                    noResult: false
                                })
                                break
                            }
                            case 'product': {
                                break
                            }
                            default: {
                                break
                            }
                        }
                    } else {
                        this.setState({noResult: true})
                    }
                    }

                })
        }
    }
    handlePageScroll = e => {
        e.preventDefault()
        console.log('abc')
    }
    component
    render() {
        let items
        if (this.state.results) {
            switch (this.props.type) {
                case 'business': {
                    items = this.state.results.map((result, index) => (
                        <Link className='search-item' key={index} to={`/business/${result.id}`}>
                            <BusinessCard business={result} />
                        </Link>
                    )
                    )
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
        } else {
            items = <div>...</div>
        }

        return (
            <React.Fragment>
                {
                    this.state.noResult ?
                    (<div>No results found</div>) 
                    : 
                    <div className='search-results-container'>
                    {items}
                    {this.newItems}
                    {
                        this.state.fetchingMore
                        ? <div>loading more results...</div>
                        : null
                    }
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default SearchResults;