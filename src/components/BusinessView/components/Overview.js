import React from 'react'
import { ScrollSpy } from 'organism-react-scroll-nav';

const Overview = (props) => {
    if (props.business !== null) {
        let business = props.business;
        return (
            <ScrollSpy id='overview' className='business_section'>
                <div className="business_heading">
                    About {business.name}
                </div>
                <div className="overview_dec">
                    <p>{business.description}</p>
                </div>
            </ScrollSpy>
        )
    }
}
export default Overview;