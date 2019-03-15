import React, { Component } from 'react'
import './InfoBarCards.css';
class InfoBarCards extends Component {
    render() {
        return(
            <div className='info-bar'>
            <div className='info-card-product'>
                    <span className="info-number"><strong>{this.props.servicesRequested}</strong></span><br />
                    <span className="info-text">Total Products/Services Requested</span>
                </div>

                <div className='info-card-hotel'>
                    <span className="info-number"><strong>{this.props.hotelBooked}</strong></span><br />
                    <span className="info-text">Total hotels booked</span>
                </div>

                <div className='info-card-food'>
                    <span className="info-number"><strong>{this.props.foodOrdered}</strong></span><br />
                    <span className="info-text">Total food ordered</span>
                </div>
            </div>
        )
    }
}
export default InfoBarCards;