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
                    {
                        props.hotelAmenities
                            ?
                            <React.Fragment>


                                <h3 className='room_amenities'>Hotel Amenities</h3>
                                <div className='amenities_body'>
                                    {
                                        props.hotelAmenities
                                            ?
                                            props.hotelAmenities.map((amenity, index) =>
                                                <div key={index} className='amenities_container'>
                                                    <img className='amenities_icon_svg' src={amenity.icon_svg} alt={amenity.amenity} />
                                                    {amenity.amenity}
                                                </div>
                                            )
                                            :
                                            <span>loading amenities gif goes here</span>
                                    }
                                </div>
                            </React.Fragment>
                            : null
                    }
                </div>
            </div>
        )
    }
}
export default Overview;