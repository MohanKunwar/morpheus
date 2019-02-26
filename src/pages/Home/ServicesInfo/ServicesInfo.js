import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import conceptimage from './../../../assets/images/business/concept.jpeg';
import './ServicesInfo.css';
class ServicesInfo extends Component {
    render() {
        return (
            <div className='services-info'>
                <div className='services-info-card'>
                    <Image thumbnail src={conceptimage} alt='concept' />
                    <div className='card-overlay-text'>
                        <p className="info-card-blue-heading">facebook boosting</p>
                        <p className='info-card-blue-btn'>Start Boosting</p>
                    </div>
                </div>
                <div className='services-info-card'>
                    <Image thumbnail src={conceptimage} alt='concept' />
                    <div className='card-overlay-text'>
                        <p className="info-card-white-heading">Hotel booking</p>
                        <p className='info-card-white-btn'>Book Now</p>
                    </div>
                </div>
                <div className='services-info-card'>
                    <Image thumbnail src={conceptimage} alt='concept' />
                    <div className='card-overlay-text'>
                        <p className="info-card-blue-heading">Food Delivery</p>
                        <p className='info-card-blue-btn'>Order Now</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServicesInfo;