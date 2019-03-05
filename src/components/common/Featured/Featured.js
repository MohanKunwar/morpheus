import React, { Component } from 'react';
// import FeaturedItem from './FeaturedItem/FeaturedItem';
import Axios from '../../../services/Axios';
import BusinessCard from './../../../UI/BusinessCard/BusinessCard';
import Carousel from './../../../UI/Carousel/Carousel';
import './Featured.css';

class Featured extends Component {
    state = {
        featuredItems: []
    }
    componentWillMount() {
        // get featured items 
        Axios.instance.get(Axios.API.common.featuredUrl).then(response => {
            if (response) {
                console.log(response.data.data)
                this.setState({
                    featuredItems: response.data.data.map(item => {
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
                });
            }
        })
    }

    render() {
        let items = null;

        if (this.state.featuredItems.length > 0) {
            items = this.state.featuredItems.map(item => {
                return (
                    
                    <div className='featured-item' key={item.id}>
                        <BusinessCard business={item} />
                    </div>
                   
                );
            })
             return (
                <div className='featured'>
                <div>Featured</div>
             <Carousel items={items} />
             </div>)

        } else {
            return (<div className='featured'>featured</div>)
            // todo
            // <Spinner />
        }
    }
}

export default Featured;