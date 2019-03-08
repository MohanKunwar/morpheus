import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from '../../../services/Axios'
import BusinessCard from '../../../UI/BusinessCard/BusinessCard';
import ProductCard from '../../../UI/ProductCard';
import './Results.css';
class SearchResults extends Component {
    newItems = []
    nextPropType = this.props.type
    state = {
        filters: this.props.filters,
        noResult: false
    }
    componentWillReceiveProps(nextProps) {
        this.nextPropType = nextProps.type
        this.buildQuery(this.props.filters)
    }
    componentWillMount() {
        this.buildQuery(this.props.filters)
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
        if (query) {
            this.setState({results: null})
            Axios.instance.get(Axios.API.search.getResults   (this.nextPropType, query.substr(0, query.lastIndexOf('&')))).then(
                response => {
                    if (response) {
                        if (response.data.data.length > 0) {
                            console.log(response.data.data)
                            switch (this.nextPropType) {
                                case 'business': {
                                    this.setState({
                                        results: response.data.data,
                                        noResult: false
                                    })
                                    break
                                }
                                case 'product': {
                                    this.setState({
                                        results: response.data.data,
                                        noResult: false
                                    })
                                    break
                                }
                                default: {
                                    break
                                }
                            }
                        } else {
                            this.setState({ noResult: true })
                        }
                    }

                })
        }
    }

    render() {
        let items
        if (this.state.results) {
            switch (this.nextPropType) {
                case 'business': {
                    items = this.state.results.map((result) => (
                        <div className='search-item'>
                            <BusinessCard business={result} />
                        </div>
                    )
                    )
                    break
                }
                case 'product': {
                    items = this.state.results.map((result, index) =>
                    <div className='search-item'>
                        <ProductCard product={result} key={index} />
                        </div>
                    )
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