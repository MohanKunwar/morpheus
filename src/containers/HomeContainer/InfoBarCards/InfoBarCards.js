import React, { Component } from 'react'
import {FaBuilding, FaUtensils, FaUserClock} from 'react-icons/fa';
import './InfoBarCards.css';
class InfoBarCards extends Component {
    render() {
        return(
            <div className='info-bar'>
            <div className='info-card-product'>
            <div className="infocardfood_icon_container"><FaUserClock className="infocardfood_icon" /></div>
                    <div><span className="info-number"><strong>{this.props.servicesRequested}</strong></span><br />
                    <span className="info-text">Total Products/Services Requested</span></div>
                </div>

                <div className='info-card-hotel'>
                    <div className="infocardhotel_icon_container"><FaBuilding className="infocardhotel_icon" /></div>
                    <div><span className="info-number">
                    <strong>{this.props.hotelBooked}</strong></span><br />
                    <span className="info-text">Total hotels booked</span></div>
                </div>

                <div className='info-card-food'>
                <div className="infocardfood_icon_container"><FaUtensils className="infocardfood_icon" /></div>
                    <div><span className="info-number"><strong>{this.props.foodOrdered}</strong></span><br />
                    <span className="info-text">Total food ordered</span></div>
                </div>
            </div>
        )
    }
}
export default InfoBarCards;