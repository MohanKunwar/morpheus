import React, {Component} from 'react'
import conceptimage from './../../../../assets/images/business/concept.jpeg';
import munneyimage from './../../../../assets/images/business/munney.jpeg';
import FeaturedItem from './FeaturedItem/FeaturedItem';
class Featured extends Component {

    getFeaturedItems = () => {
        return [
            {
                id: 1,
                name: 'Concept Club and Pub',
                address: 'Mahadev Path',
                image: conceptimage,
                category: 'Tourism and Hospitality',
                total_view: 343,
                noofreviews: 43
            },
            {
                id: 2,
                name: 'Munney Salon',
                address: 'Mahadev Path',
                image: munneyimage,
                category: 'Tourism and Hospitality',
                total_view: 343,
                noofreviews: 43
            },        {
                id: 3,
                name: 'Concept Club and Pub',
                address: 'Mahadev Path',
                image: conceptimage,
                category: 'Tourism and Hospitality',
                total_view: 343,
                noofreviews: 43
            },
            {
                id: 4,
                name: 'Munney Salon',
                address: 'Mahadev Path',
                image: munneyimage,
                category: 'Tourism and Hospitality',
                total_view: 343,
                noofreviews: 43
            }
           ] 
        }
    render() {
        const items = this.getFeaturedItems().map(item => {
            return (
                <FeaturedItem key={item.id} item={item} /> 
            );
        })
        return (
            <div className='featured'>
                {items}
            </div>);
    }
}

export default Featured;