import React, { Component } from 'react'
import BusinessCard from './../../../UI/BusinessCard/BusinessCard';
import conceptimage from './../../../assets/images/business/concept.jpeg';
import munneyimage from './../../../assets/images/business/munney.jpeg';
class Search extends Component {
    searchResults

    componentWillMount() {

        console.log('queryparams', window.location.search);
        console.log(window.location.search);
        this.getSearchResults();

        //pseudo
        // get search query from url params
        // api call to get data
        // map data to state and filter services by default
        // pass to business card
    }
    getSearchResults = () => {
        return {
            id: 1,
            name: 'Concept Club and Pub',
            address: 'Mahadev Path',
            image: conceptimage,
            categoryName: 'Tourism and Hospitality',
            total_view: 343,
            noofreviews: 43
        },
        {
            id: 2,
            name: 'Munney Salon',
            address: 'Mahadev Path',
            image: munneyimage,
            categoryName: 'Tourism and Hospitality',
            total_views: 343,
            noofreviews: 43
        }, {
            id: 3,
            name: 'Concept Club and Pub',
            address: 'Mahadev Path',
            image: conceptimage,
            categoryName: 'Tourism and Hospitality',
            total_views: 343,
            noofreviews: 43
        },
        {
            id: 4,
            name: 'Munney Salon',
            address: 'Mahadev Path',
            image: munneyimage,
            categoryName: 'Tourism and Hospitality',
            total_view: 343,
            noofreviews: 43
        }
    }
    render() {
        let results = null;
        if (this.searchResults) {
            results = this.searchResults.map(
                result => {
                    switch (result.categoryName) {
                        case 'Product': {
                            // return (<ProductCard product={result} />);
                            return null;
                        }
                        case 'Business': {
                            return (<BusinessCard business={result} />);
                        }
                        default: {
                            return null;
                        }
                    }
                }
            );
        }
        return (
            <div className='search-container'>
                <div className='filter-area'>

                </div>
                <div className='searh-area'>
                    <div className='search-options'>
                        <p>Filter area</p>
                    </div>
                    <div className='search-results'>
                        <p>results area</p>
                        {results}
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;