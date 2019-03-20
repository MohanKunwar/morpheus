import React from 'react';
import './Overview.css';

const Overview = (props) => {
    if (props.business !== null) {
        let business = props.business;
        return (
            <div className='business-overview'>
                <img className='business-cover' src={business.cover} alt={business.name} />
                <div className='overview-body'>
                        <p className="overview_heading">About {business.name}</p>
                        <p className="overview_dec">{business.description}</p>
                </div>
            </div>
        )
    }
}
export default Overview;