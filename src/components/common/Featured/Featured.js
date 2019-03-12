import React, { Component } from 'react';
// import FeaturedItem from './FeaturedItem/FeaturedItem';
import Axios from '../../../services/Axios';
import BusinessCard from './../../../UI/BusinessCard/BusinessCard';
import Carousel from './../../../UI/Carousel/Carousel';
import './Featured.css';
import Spinner from '../../../helpers/Spinner';

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
                    featuredItems: response.data.data
                });
            }
        })
    }

    render() {
        let items = this.state.featuredItems.map(item => {
            return (
                <div className='featured-item' key={item.id}>
                    <BusinessCard business={item} />
                </div>
            );
        })

        return (
            <div className='featured'>
                <div>Featured</div>
                {
                    this.state.featuredItems.length > 0
                        ? <Carousel items={items} />
                        : <Spinner />
                }
            </div>
        )
    }
}

export default Featured;