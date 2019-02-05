import React, { Component } from 'react'
import conceptimage from './../../../../assets/images/business/concept.jpeg';
import munneyimage from './../../../../assets/images/business/munney.jpeg';
// import FeaturedItem from './FeaturedItem/FeaturedItem';
import BusinessCard from './../../../../UI/BusinessCard/BusinessCard';
import './Featured.css';

class Featured extends Component {

    // all component related api calls here
    getCategories = () => {
        // axios

    }
    getFeaturedItems = () => {
        // getFeaturedItems (
            const categories=this.props.categories;
        // add categoryInfo
        // getCategories(
        // map items to categories item model in state
        // )
        // )
        return [
            {
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
        ]
    }
    render() {
        const items = this.getFeaturedItems().map(item => {
            return (
                // <FeaturedItem key={item.id} item={item} /> 
                <div className='featured-item' key={item.id}>
                    {/* item model  */}
                    <BusinessCard business={item} />
                        {/* // key={item.id}
                        imageSrc={item.image}
                        businessUrl={item.businessUrl}
                        name={item.name}
                        title={item.title}
                        categoryName={item.categoryName}
                        categoryUrl={item.categoryUrl}
                        totalViews={item.total_views}
                        totalReviews={item.noofreviews}
                        reviewStars={item.reviewstars}
                    ></BusinessCard> */}

                </div>
            );
        })
        return (
            <div className='featured'>
                {items}
            </div>);
    }
}

export default Featured;