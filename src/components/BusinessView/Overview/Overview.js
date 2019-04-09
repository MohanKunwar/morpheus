import React from 'react';
import './Overview.css';

const Overview = (props) => {
    if (props.business !== null) {
        let business = props.business;
        return (
            <div className='business_overview'>
                <img className='business_cover' src={business.cover} alt={business.name} />
                <div className='overview'>
                <div className="overview_heading">
                About {business.name}
                </div>
                <div className="overview_dec">
                {business.description}
                </div>
                </div>
                </div>
        )
    }
}
export default Overview;