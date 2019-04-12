import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Spinner from '../../../helpers/Spinner';
import Axios from '../../../services/Axios'
import BusinessCard from '../../../UI/BusinessCard/BusinessCard';
import ProductCard from '../../../UI/ProductCard';
import './Results.css';
class SearchResults extends Component {
    nextPropType = this.props.type
    filters = this.props.filters
    state = {
        noResult: false
    }
    componentWillReceiveProps(nextProps) {
        this.nextPropType = nextProps.type
        this.filters = nextProps.filters
        this.loadResults(this.filters)
    }
    componentWillMount() {
        this.loadResults(this.props.filters)
        document.addEventListener('scroll', this.trackScrolling)
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
        if (filters.page) {
            query += `page=${filters.page}&`
        }
        return query.substr(0, query.lastIndexOf('&'))
    }
    trackScrolling = () => {
        const wrappedElement = document.getElementById('end_of_search');
        if (this.isBottom(wrappedElement)) {
            if (this.state.nextResults && this.state.results.length > 0) {
                this.setState({ loadNewItems: true })
                let query = this.buildQuery(this.props.filters)
                query += `&${this.state.nextResults.split('?')[1]}`
                this.getResults(query)
            } else {
                this.setState({ loadNewItems: false })
            }
        }
    }
    isBottom(el) {
        if (el) {
            return el.getBoundingClientRect().bottom <= window.innerHeight;
        }
    }
    getResults = (url) => {
        this.setState({nextResults: null})
        Axios.instance.get(Axios.API.search.getResults(this.nextPropType, url)).then(
            response => {
                if (response.data) {
                    console.log(response.data)
                    if (response.data.data.length > 0) {
                        let tempResults = this.state.results
                        if (tempResults) {
                            response.data.data.map(item =>
                                tempResults.push(item)
                            )
                        }
                        this.setState({
                            results: !this.state.results ? response.data.data : tempResults,
                            noResult: false,
                            nextResults: response.data.links.next,
                            loadNewItems: false
                        })

                    } else {
                        this.setState({ noResult: true, results: [] })
                    }
                }
            })
    }

    loadResults = filters => {
        this.setState({ results: null })
        let query = this.buildQuery(filters)
        this.getResults(query)
    }
    buildFilters = () => {
        return (
            <div className='applied-filters'>
                {
                    this.filters.q
                        ? <span>term: {this.filters.q} <button>x</button></span>
                        : null
                }
                {
                    this.filters.category
                        ? <span>category: {this.filters.category} <button>x</button></span>
                        : null
                }
                {
                    this.filters.location
                        ? <span>term: {this.filters.location} <button>x</button></span>
                        : null
                }
                {
                    this.filters.newest
                        ? <span>newest<button>x</button></span>
                        : null
                }
                {
                    this.filters.popular
                        ? <span>popular<button>x</button></span>
                        : null
                }
            </div>
        )
    }
    render() {
        let items
        if (this.state.results) {
            switch (this.nextPropType) {
                case 'business': {
                    items = this.state.results.map((result, index) => (
                        <div className='search-item' key={index}>
                            <BusinessCard business={result} />
                        </div>
                    )
                    )
                    break
                }
                case 'product': {
                    items = this.state.results.map((result, index) =>
                        <div className='search-item' key={index}>
                            <ProductCard product={result} />
                        </div>
                    )
                    break
                }
                default: {
                    break
                }
            }
        } else {
            items = <Spinner />
        }

        return (
            <React.Fragment>
                {/* {
                    this.buildFilters()
                } */}
                {
                    this.state.results
                        ? (this.state.noResult ?
                            (<div>No results found</div>)
                            :
                            <div className='search-results-container'>
                                {items}
                                {
                                    this.state.loadNewItems
                                        ? <div className="loader_result">loading more results...</div>
                                        : <div className="loader_result">no more records</div>
                                }
                                <div id='end_of_search'></div>
                            </div>)
                        : <Spinner />
                }
            </React.Fragment>
        )
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling)
    }
}

export default SearchResults;