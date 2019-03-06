import React from 'react';
import { Image } from 'react-bootstrap';
import './Overview.css';

const Overview = (props) => {
    if (props.business !== null) {
        let business = props.business;
        return (
            <div className='business-overview'>
                <Image className='business-cover' src={business.cover} alt={business.name} />
                <div className='overview-body'>
                        <p>About {business.name}</p>
                        <p>{business.description}</p>
                </div>
            </div>
        )
    }
}
export default Overview;