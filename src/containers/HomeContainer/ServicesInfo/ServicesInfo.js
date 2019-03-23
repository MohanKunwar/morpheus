import React, { Component } from 'react';
import facebookboost from './../../../assets/images/business/facebookboost.png';
import food from './../../../assets/images/business/pmomo.png';
import hotelbook from './../../../assets/images/business/hotelbook.png';
import './ServicesInfo.css';

class ServicesInfo extends Component {
    render(){
        return(
            <div className='services-info'>
                <div className='servicesinfo-facebook-card'>
                <p className="info-card-facebook-heading">facebook boosting</p>
                        <p className="info-card-facebook-text">facebook boosting text</p>
                    <img src={facebookboost} alt='concept' />
                    <div className='card-overlay-facebook-text'>
                        <button className='info-card-facebook-btn'>Start Boosting</button>
                    </div>
                </div>
                <div className='servicesinfo-hotel-card'>
                    <img  src={hotelbook} alt='concept' />
                    <div className='card-overlay-hotel-text'>
                        <p className="info-card-white-heading">Hotel Booking</p>
                        <p className="info-card-hotel-text">hotel text</p>
                        <button className='info-card-hotel-btn'>Book Now</button>
                    </div>
                </div>
                <div className='servicesinfo-food-card'>
                    <img  src={food} alt='concept' />
                    <div className='card-overlay-food-text'>
                        <p className="info-card-food-heading">Food Delivery</p>
                        <p className="info-card-food-text">food text</p>
                        <button className='info-card-food-btn'>Order Now</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServicesInfo;