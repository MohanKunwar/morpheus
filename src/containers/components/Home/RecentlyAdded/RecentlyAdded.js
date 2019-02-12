import React, {Component} from 'react'
import BusinessCard from './../../../../UI/BusinessCard/BusinessCard';
import conceptimage from './../../../../assets/images/business/concept.jpeg';
import munneyimage from './../../../../assets/images/business/munney.jpeg';
import './RecentlyAdded.css';
class RecentlyAdded extends Component {
    getRecentlyAddedItems = () => {
        // getRecentlyAddedItems (
            // const categories=this.props.categories;
        // add categoryInfo
        // getItemsWithCategories(
        // map items to categories
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
                totalView: 343,
                noofreviews: 43
            }
        ]
    }
    render() {
        const items = this.getRecentlyAddedItems().map(item => {
            return (
                // <FeaturedItem key={item.id} item={item} /> 
                <div className='recently-added-item' key={item.id}>
                    <BusinessCard business={item} />
                        {/* // key={item.id}
                        imageSrc={item.image}
                        businessUrl={item.businessUrl}
                        name={item.name}
                        title={item.title}
                        categoryName={item.categoryName}
                        categoryUrl={item.categoryUrl}
                        totalViews={item.total_views}
                    ></BusinessCard> */}

                </div>
            );
        })
        return (
            <div className='recently-added'>
                {items}
            </div>);
    }
}

export default RecentlyAdded;