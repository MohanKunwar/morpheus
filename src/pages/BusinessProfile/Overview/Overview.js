import React from 'react';
import { Image } from 'react-bootstrap';
import './Overview.css';

const Overview = (props) => {
    let overview = null;
    if (props.business !== null) {
        let business = props.business;
        return (
            <div className='business-overview'>
                <Image className='business-cover' src={business.cover} alt={business.name} />
                <div className='overview-body'>
                    <div className='overview-about'>
                        <p>About {business.name}</p>
                        <p>{business.description}</p>
                    </div>
                    <div className='overview-contact'>
                        google api integration
                        <p>{business.address}</p>
                        <p>{business.email}</p>
                        {/* // todo
                        // check if user logged in for phone number and hours */}
                        <p>{business.mobile_number}</p>
                        <p>{business.website}</p>
                    </div>
                    <div className='overview-activity'>overview right area</div>
                    <div className='overview-rating'>
                        <p>{business.rating_avg} rating {business.review_count} reviews</p>
                    </div>
                </div>
            </div>
        )
    }
    return (overview);
}
export default Overview;